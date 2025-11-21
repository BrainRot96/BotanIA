import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, ArrowLeft, Leaf, TreeDeciduous } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";

interface FTV {
  id: number;
  fiche_technique: {
    I_IDENTITE: {
      nom_vernaculaire: string;
      nom_latin: string;
      famille: string;
      genre: string;
      espece: string;
      cultivar: string;
      categorie: string;
    };
    II_CYCLE_DE_VIE: {
      caduc_persistant: string;
      type: string;
      floraison_mois: string[];
      couleur_floraison: string;
    };
    III_EXIGENCES: {
      rusticite_celsius: number;
      echelle_rusticite: string;
      resistance_chaleur: string;
      besoins_eau: string;
      exposition: string;
      sol_necessaire: string;
      origines_espece: string;
    };
    IV_CARACTERISTIQUES: {
      odorante: boolean;
      mellifere_intensite: string;
      envahissante_potentiel: string;
      developpement_bac: string;
      resistance_pietinement: string;
      resistance_intemperies: string;
      taille?: {
        hauteur_min_m: number;
        hauteur_max_m: number;
        largeur_min_m: number;
        largeur_max_m: number;
      };
    };
    V_GESTION_URBAINE: {
      facilite_entretien_score: number;
      justification_entretien: string;
      capacite_drainante: string;
      resistance_pollution: string;
      impact_biodiversite: string;
      taux_couverture_ombrage: string;
      perennite_sujet: string;
    };
    VI_SANTE_USAGES: {
      comestible: string;
      mode_consommation_note: string;
      toxique_humains: boolean;
      toxique_animaux: boolean;
      alerte_toxicite_detail: string;
      bouturage_difficulte: string;
    };
  };
}

interface Catalogue {
  catalogue: {
    plantes: FTV[];
  };
}

export default function PlantDetail() {
  const params = useParams();
  const plantId = params.id ? parseInt(params.id) : null;
  
  const [plante, setPlante] = useState<FTV | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/catalogue.json")
      .then((res) => res.json())
      .then((data: Catalogue) => {
        const found = data.catalogue.plantes.find((p) => p.id === plantId);
        setPlante(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement:", err);
        setLoading(false);
      });
  }, [plantId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Leaf className="w-12 h-12 animate-pulse text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement de la fiche...</p>
        </div>
      </div>
    );
  }

  if (!plante) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Plante non trouvée</p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au catalogue
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const data = plante.fiche_technique;

  const getLevelColor = (level: string) => {
    if (level.includes("Élevé") || level.includes("Forte")) return "bg-green-100 text-green-800 border-green-300";
    if (level.includes("Moyen") || level.includes("Moyenne")) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    return "bg-red-100 text-red-800 border-red-300";
  };

  const extractLevel = (text: string) => {
    const match = text.match(/^([^(]+)/);
    return match ? match[1].trim() : text;
  };

  const getScoreColor = (score: number) => {
    if (score <= 3) return "bg-green-100 text-green-800 border-green-400";
    if (score <= 6) return "bg-yellow-100 text-yellow-800 border-yellow-400";
    return "bg-red-100 text-red-800 border-red-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* En-tête */}
      <header className="bg-primary text-primary-foreground py-6 shadow-lg">
        <div className="container">
          <div className="flex items-center gap-4">
            <TreeDeciduous className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Fiche Technique Végétale</h1>
              <p className="text-sm opacity-90">Direction des Espaces Verts et de l'Environnement - Ville de Paris</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Bouton retour */}
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au catalogue
          </Button>
        </Link>

        {/* Identité */}
        <Card className="mb-6 border-2 border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              {data.I_IDENTITE.nom_vernaculaire}
            </CardTitle>
            <CardDescription className="text-lg italic">{data.I_IDENTITE.nom_latin}</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Famille</p>
                <p className="text-base">{data.I_IDENTITE.famille}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Catégorie</p>
                <p className="text-base">{data.I_IDENTITE.categorie}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Genre / Espèce</p>
                <p className="text-base">{data.I_IDENTITE.genre} / {data.I_IDENTITE.espece}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Cultivar</p>
                <p className="text-base">{data.I_IDENTITE.cultivar || "Espèce type"}</p>
              </div>
            </div>
            
            {/* Taille */}
            {data.IV_CARACTERISTIQUES.taille && (
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-primary">▼</span>
                  Dimensions adultes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm font-semibold text-green-900 mb-1">↕️ Hauteur</p>
                    <p className="text-2xl font-bold text-green-700">
                      {data.IV_CARACTERISTIQUES.taille.hauteur_min_m === data.IV_CARACTERISTIQUES.taille.hauteur_max_m
                        ? `${data.IV_CARACTERISTIQUES.taille.hauteur_min_m} m`
                        : `${data.IV_CARACTERISTIQUES.taille.hauteur_min_m} - ${data.IV_CARACTERISTIQUES.taille.hauteur_max_m} m`
                      }
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-900 mb-1">↔️ Largeur</p>
                    <p className="text-2xl font-bold text-blue-700">
                      {data.IV_CARACTERISTIQUES.taille.largeur_min_m === data.IV_CARACTERISTIQUES.taille.largeur_max_m
                        ? `${data.IV_CARACTERISTIQUES.taille.largeur_min_m} m`
                        : `${data.IV_CARACTERISTIQUES.taille.largeur_min_m} - ${data.IV_CARACTERISTIQUES.taille.largeur_max_m} m`
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* GESTION URBAINE - Mise en avant */}
        <Card className="mb-6 border-4 border-primary shadow-xl">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-2xl">🏙️ Gestion Urbaine - Informations Terrain</CardTitle>
            <CardDescription className="text-primary-foreground/90">
              Section prioritaire pour les agents techniques
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* Score d'entretien */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-lg">Facilité d'Entretien</p>
                  <div className={`flex items-center gap-2 px-5 py-2 rounded-lg border-2 ${getScoreColor(data.V_GESTION_URBAINE.facilite_entretien_score)}`}>
                    <span className="text-3xl font-bold tabular-nums">
                      {data.V_GESTION_URBAINE.facilite_entretien_score}
                    </span>
                    <span className="text-sm font-medium opacity-70">/10</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{data.V_GESTION_URBAINE.justification_entretien}</p>
              </div>

              {/* Grille des indicateurs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-card border rounded-lg p-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Résistance à la Pollution</p>
                  <Badge className={getLevelColor(data.V_GESTION_URBAINE.resistance_pollution)}>
                    {extractLevel(data.V_GESTION_URBAINE.resistance_pollution)}
                  </Badge>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Capacité Drainante</p>
                  <Badge className={getLevelColor(data.V_GESTION_URBAINE.capacite_drainante)}>
                    {data.V_GESTION_URBAINE.capacite_drainante}
                  </Badge>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Couverture / Ombrage</p>
                  <Badge className={getLevelColor(data.V_GESTION_URBAINE.taux_couverture_ombrage)}>
                    {extractLevel(data.V_GESTION_URBAINE.taux_couverture_ombrage)}
                  </Badge>
                </div>

                <div className="bg-card border rounded-lg p-4 md:col-span-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Impact sur la Biodiversité</p>
                  <p className="text-sm">{data.V_GESTION_URBAINE.impact_biodiversite}</p>
                </div>

                <div className="bg-card border rounded-lg p-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Pérennité du Sujet</p>
                  <p className="text-sm">{data.V_GESTION_URBAINE.perennite_sujet}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grille des autres sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cycle de Vie */}
          <Card>
            <CardHeader>
              <CardTitle>Cycle de Vie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Type de Feuillage</p>
                <p>{data.II_CYCLE_DE_VIE.caduc_persistant}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Type de Plante</p>
                <p>{data.II_CYCLE_DE_VIE.type}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Floraison</p>
                <p>{data.II_CYCLE_DE_VIE.floraison_mois.length > 0 ? data.II_CYCLE_DE_VIE.floraison_mois.join(", ") : "Non applicable"}</p>
                {data.II_CYCLE_DE_VIE.couleur_floraison && (
                  <p className="text-sm text-muted-foreground">{data.II_CYCLE_DE_VIE.couleur_floraison}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Exigences */}
          <Card>
            <CardHeader>
              <CardTitle>Exigences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Rusticité</p>
                <p>{data.III_EXIGENCES.rusticite_celsius}°C ({data.III_EXIGENCES.echelle_rusticite})</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Résistance à la Chaleur</p>
                <Badge className={getLevelColor(data.III_EXIGENCES.resistance_chaleur)}>
                  {data.III_EXIGENCES.resistance_chaleur}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Besoins en Eau</p>
                <Badge className={getLevelColor(data.III_EXIGENCES.besoins_eau)}>
                  {data.III_EXIGENCES.besoins_eau}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Exposition</p>
                <p>{data.III_EXIGENCES.exposition}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Sol Nécessaire</p>
                <p className="text-sm">{data.III_EXIGENCES.sol_necessaire}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Origines</p>
                <p className="text-sm">{data.III_EXIGENCES.origines_espece}</p>
              </div>
            </CardContent>
          </Card>

          {/* Caractéristiques */}
          <Card>
            <CardHeader>
              <CardTitle>Caractéristiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Odorante</p>
                  <p>{data.IV_CARACTERISTIQUES.odorante ? "Oui" : "Non"}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Mellifère</p>
                  <Badge variant="outline">{data.IV_CARACTERISTIQUES.mellifere_intensite}</Badge>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Envahissante</p>
                  <Badge className={getLevelColor(data.IV_CARACTERISTIQUES.envahissante_potentiel)}>
                    {data.IV_CARACTERISTIQUES.envahissante_potentiel}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Développement en Bac</p>
                  <p>{data.IV_CARACTERISTIQUES.developpement_bac}</p>
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Résistance au Piétinement</p>
                <Badge className={getLevelColor(data.IV_CARACTERISTIQUES.resistance_pietinement)}>
                  {data.IV_CARACTERISTIQUES.resistance_pietinement}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Résistance aux Intempéries</p>
                <p className="text-sm">{data.IV_CARACTERISTIQUES.resistance_intemperies}</p>
              </div>
            </CardContent>
          </Card>

          {/* Santé / Usages */}
          <Card>
            <CardHeader>
              <CardTitle>Santé & Usages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Comestibilité</p>
                <p>{data.VI_SANTE_USAGES.comestible}</p>
                {data.VI_SANTE_USAGES.mode_consommation_note && data.VI_SANTE_USAGES.mode_consommation_note !== "Non applicable" && (
                  <p className="text-sm text-muted-foreground">{data.VI_SANTE_USAGES.mode_consommation_note}</p>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Bouturage</p>
                <Badge variant="outline">{data.VI_SANTE_USAGES.bouturage_difficulte}</Badge>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Toxicité</p>
                <div className="flex gap-2 mb-2">
                  <Badge variant={data.VI_SANTE_USAGES.toxique_humains ? "destructive" : "secondary"}>
                    Humains: {data.VI_SANTE_USAGES.toxique_humains ? "Oui" : "Non"}
                  </Badge>
                  <Badge variant={data.VI_SANTE_USAGES.toxique_animaux ? "destructive" : "secondary"}>
                    Animaux: {data.VI_SANTE_USAGES.toxique_animaux ? "Oui" : "Non"}
                  </Badge>
                </div>
                {data.VI_SANTE_USAGES.alerte_toxicite_detail && data.VI_SANTE_USAGES.alerte_toxicite_detail !== "Aucune toxicité connue." && (
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded">
                    <div className="flex gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-900"
                        dangerouslySetInnerHTML={{
                          __html: data.VI_SANTE_USAGES.alerte_toxicite_detail
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="bg-muted mt-12 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ville de Paris - Direction des Espaces Verts et de l'Environnement (DEVE)</p>
          <p className="mt-1">Fiche générée par Manus Végétal - Système d'Information Horticole</p>
        </div>
      </footer>
    </div>
  );
}

