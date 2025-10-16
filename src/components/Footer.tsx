import { Separator } from "./ui/separator";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { navigate } from "./Router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-4">TechSzerviz</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Szakértő számítógép javítás több mint 8 éves tapasztalattal. 
              Megbízható, gyors és kedvező áron.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100083207892324&locale=hu_HU" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/k_szebi2" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Szolgáltatások</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigate('asztali-pc')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Asztali PC javítás
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('laptop-szerviz')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Laptop szerviz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('adatmentes')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Adatmentés
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('hardver-upgrade')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Hardver upgrade
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('halozat-kiepites')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Hálózat kiépítés
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Gyors linkek</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigate('home')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Főoldal
                </button>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Szolgáltatások
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Rólunk
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Kapcsolat
                </a>
              </li>
              <li>
                <button 
                  onClick={() => navigate('aszf')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  ÁSZF
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('adatvedelem')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Adatvédelem
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Kapcsolat</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80">3593 Hejőbába</p>
                  <p className="text-primary-foreground/80">Hejő utca 42.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <p className="text-primary-foreground/80">+36 20 984 2741</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <p className="text-primary-foreground/80">info@techszerviz.hu</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 TechSzerviz. Minden jog fenntartva.</p>
          <p className="mt-2 md:mt-0">Weboldal készítette: TechSzerviz csapat</p>
        </div>
      </div>
    </footer>
  );
}