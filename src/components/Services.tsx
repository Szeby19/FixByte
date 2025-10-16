import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Monitor, Laptop, HardDrive, Cpu, Wifi } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { navigate } from "./Router";

const services = [
  {
    icon: Monitor,
    title: "Asztali PC javítás",
    description: "Teljes körű asztali számítógép javítás és karbantartás",
    price: "5.000 Ft-tól",
    features: ["Hardver diagnosztika", "Alkatrész csere", "Tisztítás", "Optimalizálás"],
    route: "asztali-pc",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Laptop,
    title: "Laptop szerviz",
    description: "Tisztítás, pasztázás és Windows telepítés",
    price: "7.000 Ft-tól",
    features: ["Tisztítás", "Hőelvezető paszta csere", "Windows telepítés", "Újratelepítés"],
    route: "laptop-szerviz",
    color: "from-green-500 to-green-600"
  },
  {
    icon: HardDrive,
    title: "Adatmentés",
    description: "Elveszett adatok visszaállítása megbízhatóan",
    price: "8.000 Ft-tól",
    features: ["HDD/SSD helyreállítás", "Fájl visszaállítás", "Biztonsági mentés", "Adatvédelem"],
    route: "adatmentes",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Cpu,
    title: "Hardver upgrade",
    description: "Számítógép teljesítményének növelése",
    price: "10.000 Ft-tól",
    features: ["RAM bővítés", "SSD beépítés", "Videókártya csere", "Processzor upgrade"],
    route: "hardver-upgrade",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Wifi,
    title: "Hálózat kiépítés",
    description: "Irodai és otthoni hálózatok telepítése",
    price: "15.000 Ft-tól",
    features: ["WiFi telepítés", "Router konfiguráció", "Kábelezés", "Biztonsági beállítás"],
    route: "halozat-kiepites",
    color: "from-teal-500 to-teal-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Szolgáltatásaink</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teljes körű számítógép szerviz szolgáltatások magánszemélyek és vállalkozások részére. 
            Minden esetben gyors és megbízható megoldást kínálunk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      <div className="text-sm font-semibold text-green-600">{service.price}</div>
                    </div>
                  </div>
                  <CardDescription className="mt-3">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => navigate(service.route)}
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white shadow-lg`}
                  >
                    Részletek megtekintése
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl mb-4">Miért válasszon minket?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4>Gyors javítás</h4>
                  <p className="text-sm text-muted-foreground">A legtöbb probléma 24 órán belül megoldható</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4>Eredeti alkatrészek</h4>
                  <p className="text-sm text-muted-foreground">Csak minőségi, eredeti vagy kompatibilis alkatrészeket használunk</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4>Garancia</h4>
                  <p className="text-sm text-muted-foreground">12 hónap garancia minden javításra</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1596302332910-07f3ac264d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHRvb2xzJTIwZWxlY3Ryb25pY3MlMjByZXBhaXIlMjBtb2Rlcm58ZW58MXx8fHwxNzU5Njg0Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern elektronikai eszközök és alkatrészek"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}