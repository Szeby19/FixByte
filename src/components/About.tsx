import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Award, Clock, ThumbsUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Elégedett ügyfél"
  },
  {
    icon: Clock,
    number: "8+",
    label: "Év tapasztalat"
  },
  {
    icon: Award,
    number: "50+",
    label: "Sikeres javítás"
  },
  {
    icon: ThumbsUp,
    number: "98%",
    label: "Elégedettség"
  }
];

const certifications = [
  
];

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Rólunk</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A TechSzerviz csapata több mint 8 éve nyújt megbízható számítógép javítási szolgáltatásokat. 
            Szakértelmünk és tapasztalatunk garantálja, hogy eszközei a legjobb kezekben vannak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6">Miért bízhat bennünk?</h3>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2">Tapasztalt szakemberek</h4>
                <p className="text-muted-foreground">
                  Csapatunk magasan képzett technikusokból áll, akik naprakészek a legújabb technológiákkal
                  és javítási módszerekkel kapcsolatban.
                </p>
              </div>
              
              <div>
                <h4 className="mb-2">Korszerű eszközök</h4>
                <p className="text-muted-foreground">
                  Professzionális diagnosztikai eszközökkel rendelkezünk, amelyek segítségével 
                  gyorsan és pontosan azonosítjuk a problémákat.
                </p>
              </div>
              
              <div>
                <h4 className="mb-2">Átlátható árazás</h4>
                <p className="text-muted-foreground">
                  Minden javítás előtt pontos árajánlatot adunk, nem számítunk fel rejtett költségeket.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary">{cert}</Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758876202983-c36dd5019142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDF8fHx8MTc1OTY4NDc2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professzionális technológiai munkakörnyezet"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader className="pb-3">
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="text-2xl text-primary">{stat.number}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}