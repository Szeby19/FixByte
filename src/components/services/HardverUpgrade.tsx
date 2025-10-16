import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Cpu, CheckCircle, ArrowLeft, Clock, Shield, TrendingUp, Zap } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { navigate } from "../Router";

const upgradeServices = [
  {
    title: "RAM memória bővítés",
    description: "Gyorsabb multitasking és jobb teljesítmény",
    price: "8.000 Ft + alkatrész",
    duration: "30 perc",
    performance: "+50-100%",
    details: ["Kompatibilitás ellenőrzés", "Professzionális beépítés", "Teljesítmény teszt"]
  },
  {
    title: "SSD meghajtó beépítés",
    description: "Villámgyors rendszerindítás és adatátvitel",
    price: "10.000 Ft + SSD",
    duration: "1-2 óra",
    performance: "+300-500%",
    details: ["Windows áthelyezés", "Adatok másolása", "Régi HDD eltávolítás"]
  },
  {
    title: "Videókártya upgrade",
    description: "Gaming és grafikai teljesítmény növelése",
    price: "15.000 Ft + VGA",
    duration: "2-3 óra",
    performance: "+200-800%",
    details: ["Tápegység ellenőrzés", "Driver telepítés", "Benchmark tesztek"]
  },
  {
    title: "Processzor csere",
    description: "CPU upgrade modern processzorra",
    price: "20.000 Ft + CPU",
    duration: "3-4 óra",
    performance: "+100-300%",
    details: ["Kompatibilitás vizsgálat", "Hűtés frissítés", "BIOS beállítás"]
  }
];

const popularUpgrades = [
  {
    component: "8GB → 16GB RAM",
    price: "25.000 Ft",
    benefit: "Gördülékeny multitasking"
  },
  {
    component: "HDD → 500GB SSD",
    price: "45.000 Ft",
    benefit: "10x gyorsabb rendszer"
  },
  {
    component: "GTX 1050 → RTX 3060",
    price: "180.000 Ft",
    benefit: "Modern gaming élmény"
  },
  {
    component: "i5-7400 → i5-12400",
    price: "120.000 Ft",
    benefit: "50% jobb teljesítmény"
  }
];

const performanceMetrics = [
  { metric: "Rendszerindítás", before: "2-3 perc", after: "10-20 mp", improvement: "90%" },
  { metric: "Program indítás", before: "5-15 mp", after: "1-3 mp", improvement: "80%" },
  { metric: "Fájlmásolás", before: "50 MB/s", after: "500 MB/s", improvement: "900%" },
  { metric: "Gaming FPS", before: "30-45", after: "60-120", improvement: "200%" }
];

export function HardverUpgrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('home')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Vissza
          </Button>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-foreground">Hardver upgrade</h1>
              <p className="text-muted-foreground">Számítógép teljesítményének növelése</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl mb-6">Upgrade szolgáltatások</h2>
            <div className="grid gap-6 mb-8">
              {upgradeServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                        <div className="text-sm text-green-600 font-medium flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {service.performance}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Szolgáltatás tartalmazza:</h4>
                      <div className="grid gap-2">
                        {service.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{service.duration}</span>
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800 flex items-center space-x-1">
                          <Zap className="h-3 w-3" />
                          <span>{service.performance}</span>
                        </Badge>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-500 to-purple-600">
                        Konzultáció
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Popular Upgrades */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Népszerű upgrade csomagok</CardTitle>
                <CardDescription>
                  A leggyakoribb fejlesztések komplett árakkal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {popularUpgrades.map((upgrade, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{upgrade.component}</h4>
                        <span className="text-lg font-bold text-purple-600">{upgrade.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{upgrade.benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Teljesítmény összehasonlítás</CardTitle>
                <CardDescription>
                  Mire számíthat az upgrade után?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{metric.metric}</h4>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-red-600">Előtte: {metric.before}</span>
                          <span className="text-green-600">Utána: {metric.after}</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        +{metric.improvement}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>PC konfiguráció ellenőrzés</CardTitle>
                <CardDescription>Küldje el gépének adatait a személyre szabott ajánlatért</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Processzor</label>
                    <input 
                      type="text"
                      className="w-full p-3 border rounded-lg"
                      placeholder="pl. Intel i5-8400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">RAM mennyiség</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Válasszon...</option>
                      <option>4GB</option>
                      <option>8GB</option>
                      <option>16GB</option>
                      <option>32GB vagy több</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Jelenlegi tároló</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Válasszon...</option>
                      <option>HDD (hagyományos)</option>
                      <option>SSD</option>
                      <option>Hibrid (HDD+SSD)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Mire használja?</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={3}
                      placeholder="Játék, munka, grafika..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600">
                    Ingyenes konfiguráció javaslat
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upgrade előnyök</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Zap className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Gyorsabb munkavégzés</h4>
                      <p className="text-sm text-muted-foreground">Kevesebb várakozás</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Jobb gaming élmény</h4>
                      <p className="text-sm text-muted-foreground">Magasabb FPS és minőség</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Hosszabb élettartam</h4>
                      <p className="text-sm text-muted-foreground">Modern alkatrészek</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758577675588-c5bbbbbf8e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1lbW9yeSUyMFJBTSUyMG1vZHVsZXMlMjBjb21wb25lbnRzfGVufDF8fHx8MTc1OTY4NDg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Számítógép memória és komponensek"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Ingyenes konzultáció</h3>
                <p className="text-sm mb-4 opacity-90">
                  Szakértőink segítenek kiválasztani a megfelelő upgrade-et
                </p>
                <Button variant="secondary" className="w-full">
                  Egyeztetés foglalása
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}