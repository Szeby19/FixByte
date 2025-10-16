import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const contactInfo = [
  {
    icon: MapPin,
    title: "Címünk",
    details: ["3593 Hejőbába", "hejő utca 42."]
  },
  {
    icon: Phone,
    title: "Telefonszám",
    details: ["+36 20 984 2741", "+36 xx 000 0000"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["kovszebi11@gmail.com", "info@techszerviz.hu"]
  },
  {
    icon: Clock,
    title: "Nyitvatartás",
    details: ["Hétfő-Péntek: 8:00-20:00", "Szombat: 9:00-22:00"]
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Kapcsolat</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot! Örömmel válaszolunk kérdéseire és segítünk 
            számítógépes problémái megoldásában.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Ingyenes konzultáció</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Név *</Label>
                      <Input id="name" placeholder="Az Ön neve" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input id="phone" placeholder="+36 30 123 4567" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="pelda@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="device">Eszköz típusa</Label>
                    <Input id="device" placeholder="pl. Dell Laptop, Asztali PC..." />
                  </div>
                  
                  <div>
                    <Label htmlFor="problem">Probléma leírása *</Label>
                    <Textarea 
                      id="problem" 
                      placeholder="Kérjük, írja le a problémát részletesen..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Árajánlat kérése
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    * A csillaggal jelölt mezők kitöltése kötelező. 24 órán belül visszahívjuk!
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Helyszíni és távoli szolgáltatások</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageWithFallback
                  src="img/valami.png"
                  alt="Professzionális technológiai munkakörnyezet"
                  className="rounded-lg w-full h-[300px] object-cover mb-6"
                />
                
                <div className="space-y-4">
                  <div>
                    <h4>Helyszíni javítás</h4>
                    <p className="text-sm text-muted-foreground">
                      Kiszállunk Önhöz! Budapesten és vonzáskörzetében helyszíni 
                      számítógép javítást végzünk kényelmesen otthonában vagy irodájában.
                    </p>
                  </div>
                  
                  <div>
                    <h4>Távoli segítségnyújtás</h4>
                    <p className="text-sm text-muted-foreground">
                      Sok probléma távoli elérés útján is megoldható. Gyors és biztonságos 
                      távoli támogatást nyújtunk.
                    </p>
                  </div>
                  
                  <div>
                    <h4>Rugalmas időpontok</h4>
                    <p className="text-sm text-muted-foreground">
                      Alkalmazkodunk az Ön időbeosztásához. Hétköznap és hétvégén is 
                      elérhető vagyunk egyeztetett időpontban.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}