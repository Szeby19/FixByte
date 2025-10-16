import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Wifi, CheckCircle, ArrowLeft, Clock, Shield, Network, Router } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { navigate } from "../Router";

const networkServices = [
  {
    title: "Otthoni WiFi hálózat",
    description: "Teljes otthoni vezeték nélküli hálózat kiépítése",
    price: "25.000 Ft-tól",
    duration: "2-4 óra",
    coverage: "150-200 m²",
    details: ["Router telepítés", "WiFi optimalizálás", "Biztonsági beállítás", "Eszköz csatlakoztatás"]
  },
  {
    title: "Irodai hálózat",
    description: "Professzionális irodai hálózat kialakítása",
    price: "50.000 Ft-tól",
    duration: "1-2 nap",
    coverage: "500+ m²",
    details: ["Kábelezési terv", "Switch telepítés", "Hálózati biztonság", "Szerver integráció"]
  },
  {
    title: "Mesh hálózat",
    description: "Több szintes épületek lefedése mesh rendszerrel",
    price: "80.000 Ft-tól",
    duration: "4-6 óra",
    coverage: "400-600 m²",
    details: ["Mesh router rendszer", "Zökkenőmentes roaming", "Központi kezelés", "Sebesség optimalizálás"]
  },
  {
    title: "Hálózati kábelezés",
    description: "UTP kábelek fektetése és patch panel kiépítés",
    price: "15.000 Ft-tól",
    duration: "1 nap",
    coverage: "Egyedi",
    details: ["CAT6 kábelezés", "Fali csatlakozók", "Patch panel", "Kábelkezelés"]
  }
];

const networkFeatures = [
  {
    title: "Gyors internetsebesség",
    description: "Optimalizált beállítások a maximális sebességért",
    icon: "⚡"
  },
  {
    title: "Stabil kapcsolat",
    description: "Megszakítás nélküli internethozzáférés",
    icon: "🔗"
  },
  {
    title: "Biztonságos hálózat",
    description: "WPA3 titkosítás és guest hálózat",
    icon: "🛡️"
  },
  {
    title: "Egyszerű kezelés",
    description: "Felhasználóbarát adminisztrációs felület",
    icon: "⚙️"
  }
];

const troubleshooting = [
  "Lassú internetsebesség javítása",
  "WiFi hálózat nem látható",
  "Gyakori kapcsolat megszakadás",
  "Gyenge WiFi jel egyes helyiségekben",
  "Hálózati biztonság növelése",
  "Túl sok eszköz egy hálózaton",
  "Gaming lag csökkentése",
  "Video streaming akadozás"
];

export function HalozatKiepites() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 py-20">
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
            <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg">
              <Wifi className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-foreground">Hálózat kiépítés</h1>
              <p className="text-muted-foreground">Professzionális WiFi és hálózati megoldások</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl mb-6">Hálózati szolgáltatások</h2>
            <div className="grid gap-6 mb-8">
              {networkServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-teal-600">{service.price}</div>
                        <div className="text-sm text-blue-600 font-medium">{service.coverage}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Szolgáltatás tartalmazza:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
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
                        <Badge className="bg-teal-100 text-teal-800 flex items-center space-x-1">
                          <Network className="h-3 w-3" />
                          <span>{service.coverage}</span>
                        </Badge>
                      </div>
                      <Button className="bg-gradient-to-r from-teal-500 to-teal-600">
                        Helyszíni felmérés
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Network Features */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Router className="h-5 w-5" />
                  <span>Miért fontos a professzionális hálózat?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {networkFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card>
              <CardHeader>
                <CardTitle>Hálózati problémák megoldása</CardTitle>
                <CardDescription>
                  Ezekkel a problémákkal is segítünk
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {troubleshooting.map((problem, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{problem}</span>
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
                <CardTitle>Hálózat tervezés</CardTitle>
                <CardDescription>Kérjen ingyenes helyszíni felmérést</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Épület típusa</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Válasszon...</option>
                      <option>Családi ház</option>
                      <option>Lakás</option>
                      <option>Iroda</option>
                      <option>Üzlet/bolt</option>
                      <option>Ipari épület</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Területnagyság (m²)</label>
                    <input 
                      type="number"
                      className="w-full p-3 border rounded-lg"
                      placeholder="pl. 120"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Eszközök száma</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Válasszon...</option>
                      <option>1-5 eszköz</option>
                      <option>6-15 eszköz</option>
                      <option>16-30 eszköz</option>
                      <option>30+ eszköz</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Speciális igények</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={3}
                      placeholder="Gaming, streaming, home office..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-600">
                    Ingyenes helyszíni felmérés
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hálózati csomag árak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Alapcsomag</h4>
                      <p className="text-sm text-muted-foreground">1-2 szoba</p>
                    </div>
                    <span className="font-bold text-teal-600">25.000 Ft</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Családi csomag</h4>
                      <p className="text-sm text-muted-foreground">3-4 szoba</p>
                    </div>
                    <span className="font-bold text-teal-600">45.000 Ft</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Prémium csomag</h4>
                      <p className="text-sm text-muted-foreground">Nagy ház/iroda</p>
                    </div>
                    <span className="font-bold text-teal-600">80.000 Ft</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>24/7 támogatás</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Távoli karbantartás</h4>
                      <p className="text-sm text-muted-foreground">Online beállítás módosítás</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Ingyenes konzultáció</h4>
                      <p className="text-sm text-muted-foreground">Telefonos segítség</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Gyors hibaelhárítás</h4>
                      <p className="text-sm text-muted-foreground">4 órán belül</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1750712263185-edde9f359e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXaUZpJTIwcm91dGVyJTIwbW9kZXJuJTIwdGVjaG5vbG9neSUyMHdpcmVsZXNzfGVufDF8fHx8MTc1OTY4NDg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern WiFi router és hálózati eszközök"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}