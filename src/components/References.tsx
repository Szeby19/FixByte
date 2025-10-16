import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, ArrowRight } from "lucide-react";
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
  "Gép összerakás": "bg-blue-100 text-blue-800",
  "Javítás": "bg-green-100 text-green-800",
  "Tisztítás/Karbantartás": "bg-orange-100 text-orange-800",
  "Hálózat kiépítés": "bg-purple-100 text-purple-800",
  "Hardver upgrade": "bg-cyan-100 text-cyan-800"
};

export function References() {
  const [references, setReferences] = useState<Reference[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Összes");

  useEffect(() => {
    const saved = localStorage.getItem('techszerviz_references');
    if (saved) {
      setReferences(JSON.parse(saved));
    } else {
      // Alapértelmezett referenciák
      const defaultReferences: Reference[] = [
        {
          id: "1",
          title: "Gaming PC összeállítás",
          description: "High-end gaming PC összeállítása RGB RGB világítással és vízhűtéssel. AMD Ryzen 9 processzor, RTX 4080 videókártya.",
          category: "Gép összerakás",
          date: new Date().toISOString(),
          images: ["https://images.unsplash.com/photo-1695480553563-4db8f08781d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBidWlsdCUyMGdhbWluZyUyMFBDJTIwUkdCfGVufDF8fHx8MTc1OTkzMTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
          details: "Teljes körű gaming PC összeállítás a legjobb alkatrészekből, professzionális kábelmenedzsmenttel és optimalizált légáramlással."
        },
        {
          id: "2",
          title: "Laptop tisztítás és pasztázás",
          description: "Professzionális laptop tisztítás, hőpaszta csere és rendszeroptimalizálás. A laptop hőmérséklete 30%-kal csökkent.",
          category: "Tisztítás/Karbantartás",
          date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          images: ["https://images.unsplash.com/photo-1674471361339-2e1e1dbd3e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHRlY2huaWNpYW4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5OTMxMDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
          details: "Teljes laptop szétszerelés, porellenőrzés, hőpaszta csere és rendszertisztítás. A ventillátor működése is javult."
        }
      ];
      localStorage.setItem('techszerviz_references', JSON.stringify(defaultReferences));
      setReferences(defaultReferences);
    }
  }, []);

  const categories = ["Összes", ...Object.keys(categoryColors)];
  
  const filteredReferences = selectedCategory === "Összes" 
    ? references.slice(0, 6) // Max 6 referencia a főoldalon
    : references.filter(ref => ref.category === selectedCategory).slice(0, 6);

  return (
    <section id="references" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Referenciáink</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tekintse meg korábbi munkáinkat és győződjön meg szakértelmünkről
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredReferences.map(reference => (
              <Card 
                key={reference.id}
                className="hover:shadow-lg transition-all duration-300 group overflow-hidden"
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

        {/* View All Button */}
        <div className="flex justify-center">
          <Button 
            onClick={() => navigate('references')}
            className="gap-2"
            size="lg"
          >
            Összes referencia megtekintése
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
