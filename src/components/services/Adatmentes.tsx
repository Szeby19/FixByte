import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { HardDrive, CheckCircle, ArrowLeft, Clock, Shield, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { navigate } from "../Router";

const dataRecoveryServices = [
  {
    title: "HDD helyreállítás",
    description: "Mechanikus meghajtók adatainak visszaállítása",
    price: "15.000 Ft-tól",
    duration: "1-3 nap",
    successRate: "85%",
    details: ["Fizikai sérülés javítás", "Fájlrendszer helyreállítás", "Partíció visszaállítás"]
  },
  {
    title: "SSD helyreállítás",
    description: "Flash alapú meghajtók speciális helyreállítása",
    price: "20.000 Ft-tól",
    duration: "2-5 nap",
    successRate: "70%",
    details: ["NAND flash helyreállítás", "Kontroller javítás", "Firmware helyreállítás"]
  },
  {
    title: "Törölt fájlok visszaállítása",
    description: "Véletlenül törölt fájlok és mappák helyreállítása",
    price: "8.000 Ft",
    duration: "2-4 óra",
    successRate: "95%",
    details: ["Gyors szkennelés", "Mély keresés", "Fájltípus szerinti szűrés"]
  },
  {
    title: "Rendszerlemez mentés",
    description: "Teljes rendszer biztonsági mentése",
    price: "12.000 Ft",
    duration: "3-6 óra",
    successRate: "99%",
    details: ["Teljes lemez klónozás", "Rendszerbeállítások", "Programok mentése"]
  }
];

const dataTypes = [
  "Dokumentumok (Word, Excel, PDF)",
  "Fényképek és videók",
  "E-mailek és kapcsolatok",
  "Zenefájlok",
  "Adatbázisok",
  "Weboldal fájlok",
  "CAD és grafikai fájlok",
  "Programok és beállítások"
];

const emergencyTips = [
  {
    title: "Ne használja tovább!",
    description: "Azonnal kapcsolja ki a számítógépet ha adatvesztést tapasztal"
  },
  {
    title: "Ne telepítsen semmit!",
    description: "Új programok felülírhatják a törölt adatokat"
  },
  {
    title: "Ne próbálja javítani!",
    description: "Saját kísérletek ronthatják a helyreállítás esélyeit"
  }
];

export function Adatmentes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-20">
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
            <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
              <HardDrive className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-foreground">Adatmentés és helyreállítás</h1>
              <p className="text-muted-foreground">Elveszett adatok professzionális visszaállítása</p>
            </div>
          </div>
        </div>

        {/* Emergency Alert */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              <span>Sürgős adatvesztés esetén</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {emergencyTips.map((tip, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-medium text-red-800 mb-1">{tip.title}</h4>
                  <p className="text-sm text-red-600">{tip.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Button className="bg-red-600 hover:bg-red-700">
                Sürgős segítség: +36 30 123 4567
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl mb-6">Adatmentési szolgáltatások</h2>
            <div className="grid gap-6 mb-8">
              {dataRecoveryServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">{service.price}</div>
                        <div className="text-sm text-green-600 font-medium">{service.successRate} siker</div>
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
                        <Badge className="bg-green-100 text-green-800">
                          {service.successRate} siker
                        </Badge>
                      </div>
                      <Button className="bg-gradient-to-r from-orange-500 to-orange-600">
                        Ingyenes elemzés
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Supported Data Types */}
            <Card>
              <CardHeader>
                <CardTitle>Milyen adatokat állítunk helyre?</CardTitle>
                <CardDescription>
                  Szinte minden típusú fájlt és adatot vissza tudunk állítani
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {dataTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{type}</span>
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
                <CardTitle>Ingyenes értékelés</CardTitle>
                <CardDescription>Küldje el eszköze adatait az előzetes felméréshez</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Eszköz típusa</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Válasszon...</option>
                      <option>Asztali PC merevlemez</option>
                      <option>Laptop merevlemez</option>
                      <option>Külső HDD</option>
                      <option>SSD meghajtó</option>
                      <option>USB pendrive</option>
                      <option>SD kártya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Mi történt?</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={3}
                      placeholder="Írja le a problémát részletesen..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600">
                    Ingyenes felmérés kérése
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
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Biztonságos kezelés</h4>
                      <p className="text-sm text-muted-foreground">Adatai biztonságban vannak</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Nincs adat, nincs fizetés</h4>
                      <p className="text-sm text-muted-foreground">Csak sikeres helyreállítás után</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Gyors szolgáltatás</h4>
                      <p className="text-sm text-muted-foreground">24-72 óra alatt</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1703756291643-df456ffc8079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcmVjb3ZlcnklMjBoYXJkJTIwZGlzayUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzU5Njg1MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professzionális adatmentés szolgáltatás"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Sürgős eset?</h3>
                <p className="text-sm mb-4 opacity-90">
                  24/7 elérhetőség kritikus adatvesztés esetén
                </p>
                <Button variant="secondary" className="w-full">
                  Azonnali segítség
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}