import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, Search, TreeDeciduous } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

interface Plante {
  id: number;
  fiche_technique: {
    I_IDENTITE: {
      nom_vernaculaire: string;
      nom_latin: string;
      categorie: string;
    };
    V_GESTION_URBAINE: {
      facilite_entretien_score: number;
      resistance_pollution: string;
    };
  };
}

interface Catalogue {
  catalogue: {
    titre: string;
    description: string;
    plantes: Plante[];
  };
}

export default function Catalogue() {
  const [catalogue, setCatalogue] = useState<Catalogue | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  useEffect(() => {
    fetch("/catalogue.json")
      .then((res) => res.json())
      .then((data) => {
        setCatalogue(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement du catalogue:", err);
        setLoading(false);
      });
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="text-center">
          <Leaf className="w-12 h-12 animate-pulse text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement du catalogue...</p>
        </div>
      </div>
    );
  }

  if (!catalogue) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-destructive">Erreur lors du chargement du catalogue</p>
      </div>
    );
  }

  const plantes = catalogue.catalogue.plantes;

  // Filtrage
  const plantesFiltered = plantes.filter((plante) => {
    const matchSearch =
      plante.fiche_technique.I_IDENTITE.nom_vernaculaire.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plante.fiche_technique.I_IDENTITE.nom_latin.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchCategory =
      categoryFilter === "all" || plante.fiche_technique.I_IDENTITE.categorie === categoryFilter;

    return matchSearch && matchCategory;
  });

  // Pagination
  const totalPages = Math.ceil(plantesFiltered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPlants = plantesFiltered.slice(startIndex, endIndex);

  const getScoreColor = (score: number) => {
    if (score <= 3) return "bg-green-100 text-green-800 border-green-400";
    if (score <= 6) return "bg-yellow-100 text-yellow-800 border-yellow-400";
    return "bg-red-100 text-red-800 border-red-400";
  };

  const extractLevel = (text: string) => {
    const match = text.match(/^([^(]+)/);
    return match ? match[1].trim() : text;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* En-tête */}
      <header className="bg-primary text-primary-foreground py-6 shadow-lg">
        <div className="container">
          <div className="flex items-center gap-4">
            <TreeDeciduous className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">{catalogue.catalogue.titre}</h1>
              <p className="text-sm opacity-90">{catalogue.catalogue.description}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Filtres */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Rechercher une plante</CardTitle>
            <CardDescription>Filtrez par nom ou catégorie</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Nom vernaculaire ou latin..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Toutes les catégories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  <SelectItem value="Arbre">Arbres</SelectItem>
                  <SelectItem value="Arbuste">Arbustes</SelectItem>
                  <SelectItem value="Vivace">Vivaces</SelectItem>
                  <SelectItem value="Graminée">Graminées</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {plantesFiltered.length} plante{plantesFiltered.length > 1 ? "s" : ""} trouvée{plantesFiltered.length > 1 ? "s" : ""}
              {totalPages > 1 && (
                <span className="ml-2">
                  (Page {currentPage} sur {totalPages})
                </span>
              )}
            </p>
          </CardContent>
        </Card>

        {/* Liste des plantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedPlants.map((plante) => (
            <Card key={plante.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{plante.fiche_technique.I_IDENTITE.nom_vernaculaire}</span>
                    </CardTitle>
                    <CardDescription className="italic mt-1">
                      {plante.fiche_technique.I_IDENTITE.nom_latin}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="flex-shrink-0">
                    {plante.fiche_technique.I_IDENTITE.categorie}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Facilité d'entretien</span>
                    <div className={`px-3 py-1 rounded-md text-sm font-bold ${getScoreColor(plante.fiche_technique.V_GESTION_URBAINE.facilite_entretien_score)}`}>
                      {plante.fiche_technique.V_GESTION_URBAINE.facilite_entretien_score}/10
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Résistance pollution</span>
                    <Badge variant="secondary" className="text-xs">
                      {extractLevel(plante.fiche_technique.V_GESTION_URBAINE.resistance_pollution)}
                    </Badge>
                  </div>
                  <Link href={`/plante/${plante.id}`}>
                    <Button className="w-full mt-2">
                      Voir la fiche complète
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {plantesFiltered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucune plante ne correspond à vos critères de recherche.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Précédent
            </Button>
            
            <div className="flex gap-1">
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }
                
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className="w-10"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Suivant
            </Button>
          </div>
        )}
      </main>

      {/* Pied de page */}
      <footer className="bg-muted mt-12 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ville de Paris - Direction des Espaces Verts et de l'Environnement (DEVE)</p>
          <p className="mt-1">Catalogue généré par Manus Végétal - Système d'Information Horticole</p>
        </div>
      </footer>
    </div>
  );
}

