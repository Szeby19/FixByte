import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Laptop, CheckCircle, ArrowLeft, Clock, Shield, Wrench } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { navigate } from "../Router";

const laptopServices = [
  {
    title: "Laptop tisztítás",
    description: "Teljes belső tisztítás, por eltávolítása, ventilátor tisztítás",
    price: "8.000 Ft",
    duration: "2-3 óra",
    warranty: "6 hónap",
    details: ["Ventilátor tisztítás", "Billentyűzet tisztítás", "Kijelző tisztítás", "Port tisztítás"]
  },
  {
    title: "Hőelvezető paszta csere",
    description: "Processzor és GPU hőelvezető paszta cseréje a jobb hűtésért",
    price: "6.000 Ft",
    duration: "1-2 óra",
    warranty: "12 hónap",
    details: ["CPU paszta csere", "GPU paszta csere", "Hőmérséklet teszt", "Teljesítmény ellenőrzés"]
  },
  {
    title: "Windows telepítés",
    description: "Friss Windows telepítés illesztőprogramokkal",
    price: "10.000 Ft",
    duration: "3-4 óra",
    warranty: "3 hónap",
    details: ["Windows 10/11 telepítés", "Illesztőprogramok", "Alapvető szoftverek", "Rendszer optimalizálás"]
  },
  {
    title: "Windows újratelepítés",
    description: "Teljes rendszer újratelepítés adatmentéssel",
    price: "12.000 Ft",
    duration: "4-6 óra",
    warranty: "3 hónap",
    details: ["Adatmentés", "Windows újratelepítés", "Adatok visszaállítása", "Szoftver telepítés"]
  }
];

const benefits = [
  {
    title: "Hosszabb élettartam",
    description: "A rendszeres tisztítás és karbantartás jelentősen növeli a laptop élettartamát"
  },
  {
    title: "Jobb teljesítmény",
    description: "A paszta csere és tisztítás után a laptop gyorsabban és halkabban működik"
  },
  {
    title: "Alacsonyabb hőmérséklet",
    description: "Hatékonyabb hűtés védi a komponenseket a túlmelegedéstől"
  }
];

export function LaptopSzerviz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-20">
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
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
              <Laptop className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-foreground">Laptop szerviz</h1>
              <p className="text-muted-foreground">Tisztítás, pasztázás és Windows telepítés</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl mb-6">Specializált laptop szolgáltatások</h2>
            <div className="grid gap-6 mb-8">
              {laptopServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{service.price}</div>
                        <div className="text-sm text-muted-foreground">{service.duration}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Mit tartalmaz:</h4>
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
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          <Shield className="h-3 w-3" />
                          <span>{service.warranty} garancia</span>
                        </Badge>
                      </div>
                      <Button className="bg-gradient-to-r from-green-500 to-green-600">
                        Foglalás
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wrench className="h-5 w-5" />
                  <span>Miért fontos a laptop karbantartás?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
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
                <CardTitle>Laptop értékelés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Laptop típusa</label>
                    <input 
                      type="text"
                      className="w-full p-3 border rounded-lg"
                      placeholder="pl. Dell Inspiron 15..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Probléma leírása</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={3}
                      placeholder="Milyen problémát tapasztal?"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600">
                    Ingyenes felmérés
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mikor szükséges a szerviz?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Túlmelegedés</h4>
                      <p className="text-sm text-muted-foreground">Forró laptop, ventilátorzaj</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Lassú működés</h4>
                      <p className="text-sm text-muted-foreground">Akadozó Windows</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Vírusos rendszer</h4>
                      <p className="text-sm text-muted-foreground">Gyanús programok</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzU5Njg0ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern laptop számítógép"
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