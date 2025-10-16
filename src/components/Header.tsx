import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { navigate } from "./Router";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">TechSzerviz</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('home')} className="text-foreground hover:text-primary transition-colors">Főoldal</button>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Szolgáltatások</a>
            <a href="#references" className="text-foreground hover:text-primary transition-colors">Referenciák</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Rólunk</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kapcsolat</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+36 20 984 2741</span>
            </div>
            <Button>Ingyenes felmérés</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  navigate('home');
                  setIsMenuOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Főoldal
              </button>
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Szolgáltatások
              </a>
              <a 
                href="#references" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Referenciák
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rólunk
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kapcsolat
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                <Phone className="h-4 w-4" />
                <span>+36 30 123 4567</span>
              </div>
              <Button className="w-full">Ingyenes felmérés</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}