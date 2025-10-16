import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, FolderOpen } from "lucide-react";
import { Button } from "./ui/button";
import { navigate } from "./Router";

export interface Reference {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  images: string[];
  details?: string;
}

const categoryColors: Record<string, string> = {
  "Gép összerakás": "bg-blue-100 text-blue-800 hover:bg-blue-200",
  "Javítás": "bg-green-100 text-green-800 hover:bg-green-200",
  "Tisztítás/Karbantartás": "bg-orange-100 text-orange-800 hover:bg-orange-200",
  "Hálózat kiépítés": "bg-purple-100 text-purple-800 hover:bg-purple-200",
  "Hardver upgrade": "bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
};

export function ReferencesPage() {
  const [references, setReferences] = useState<Reference[]>([]);
  const [selectedReference, setSelectedReference] = useState<Reference | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Összes");

  useEffect(() => {
    const saved = localStorage.getItem('techszerviz_references');
    if (saved) {
      setReferences(JSON.parse(saved));
    }
  }, []);

  const categories = ["Összes", ...Object.keys(categoryColors)];
  
  const filteredReferences = selectedCategory === "Összes" 
    ? references 
    : references.filter(ref => ref.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="mb-4">Referenciáink</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tekintse meg korábbi munkáinkat és győződjön meg szakértelmünkről. 
              Minden projekt egyedi megoldást jelent ügyfeleink igényeire.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 transition-all"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* References Grid */}
          {filteredReferences.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Még nincsenek referenciák ebben a kategóriában.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReferences.map(reference => (
                <Card 
                  key={reference.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 group overflow-hidden"
                  onClick={() => setSelectedReference(reference)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={reference.images[0]}
                      alt={reference.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={categoryColors[reference.category]}>
                        {reference.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{reference.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(reference.date).toLocaleDateString('hu-HU')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2">
                      {reference.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Detail Dialog */}
      <Dialog open={!!selectedReference} onOpenChange={() => setSelectedReference(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedReference && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <DialogTitle className="text-2xl mb-2">{selectedReference.title}</DialogTitle>
                    <DialogDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(selectedReference.date).toLocaleDateString('hu-HU')}
                    </DialogDescription>
                  </div>
                  <Badge className={categoryColors[selectedReference.category]}>
                    {selectedReference.category}
                  </Badge>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Description */}
                <div>
                  <h3 className="mb-2">Leírás</h3>
                  <p className="text-muted-foreground">{selectedReference.description}</p>
                </div>

                {/* Details */}
                {selectedReference.details && (
                  <div>
                    <h3 className="mb-2">Részletek</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {selectedReference.details}
                    </p>
                  </div>
                )}

                {/* Images */}
                <div>
                  <h3 className="mb-4">Képek</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedReference.images.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={image}
                          alt={`${selectedReference.title} - ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}