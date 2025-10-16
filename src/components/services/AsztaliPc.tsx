import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Monitor, CheckCircle, ArrowLeft, Clock, Shield, Wrench } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { navigate } from "../Router";

const pcServices = [
  {
    title: "Hardver diagnosztika",
    description: "Teljes körű hardver elemzés és hibakeresés",
    price: "5.000 Ft",
    duration: "1-2 óra",
    warranty: "30 nap"
  },
  {
    title: "Alkatrész csere",
    description: "RAM, HDD, SSD, videókártya és egyéb alkatrészek cseréje",
    price: "8.000 Ft + alkatrész",
    duration: "2-4 óra",
    warranty: "12 hónap"
  },
  {
    title: "Teljes tisztítás",
    description: "Belső por eltávolítása, ventilátor tisztítás",
    price: "6.000 Ft",
    duration: "1 óra",
    warranty: "6 hónap"
  },
  {
    title: "Rendszer optimalizálás",
    description: "Windows optimalizálás, vírusirtás, registry tisztítás",
    price: "7.000 Ft",
    duration: "2-3 óra",
    warranty: "3 hónap"
  }
];

const commonProblems = [
  "Nem indul el a számítógép",
  "Lassú működés",
  "Túlmelegedés",
  "Furcsa hangok",
  "Kék halál (BSOD)",
  "Internetkapcsolat problémák"
];

export function AsztaliPc() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
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
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-foreground">Asztali PC javítás</h1>
              <p className="text-muted-foreground">Professzionális számítógép szerviz szolgáltatások</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl mb-6">Szolgáltatásaink</h2>
            <div className="grid gap-6 mb-8">
              {pcServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                        <div className="text-sm text-muted-foreground">{service.duration}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
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
                      <Button className="bg-gradient-to-r from-blue-500 to-blue-600">
                        Időpont foglalás
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Common Problems */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wrench className="h-5 w-5" />
                  <span>Gyakori problémák</span>
                </CardTitle>
                <CardDescription>
                  Ezekkel a problémákkal fordulnak hozzánk leggyakrabban
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {commonProblems.map((problem, index) => (
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
                <CardTitle>Gyors árajánlat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Probléma leírása</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={4}
                      placeholder="Írja le a problémát..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600">
                    Árajánlat kérése
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Miért válasszon minket?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">24 órás javítás</h4>
                      <p className="text-sm text-muted-foreground">Legtöbb probléma egy napon belül</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Eredeti alkatrészek</h4>
                      <p className="text-sm text-muted-foreground">Minőségi komponensek</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">12 hónap garancia</h4>
                      <p className="text-sm text-muted-foreground">Minden javításra</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1751887687523-bd5aa55a8c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwUEMlMjB0b3dlciUyMGNvbXB1dGVyJTIwbW90aGVyYm9hcmQlMjBoYXJkd2FyZXxlbnwxfHx8fDE3NTk2ODUwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Asztali PC belső alkatrészek"
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