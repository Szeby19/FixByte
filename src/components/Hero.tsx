import { Button } from "./ui/button";
import { CheckCircle, Clock, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              Számítógép javítás <span className="text-primary">szakértőktől</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Gyors, megbízható és professzionális számítógép szerviz szolgáltatások. 
              Több mint 8 éves tapasztalattal állunk rendelkezésére.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg">Ingyenes diagnosztika</Button>
              <Button variant="outline" size="lg">+36 20 984 2741</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">24 órás javítás</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">1 év garancia</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">Azonnali árajánlat</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1674471361339-2e1e1dbd3e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHRlY2huaWNpYW4lMjB3b3JraW5nJTIwcmVwYWlyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTY4NTA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professzionális számítógép javítás"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}