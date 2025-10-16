import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollArea } from "./ui/scroll-area";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="mb-8 text-center">Adatvédelmi Nyilatkozat</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="mb-4">1. Bevezetés</h2>
              <p className="mb-4">
                A TechSzerviz (székhely: 1234 Budapest, Technológia utca 42., adószám: 12345678-1-42) 
                elkötelezett az ügyfelek személyes adatainak védelme iránt.
              </p>
              <p>
                Jelen adatvédelmi nyilatkozat célja, hogy tájékoztassa Önt arról, hogyan gyűjtjük, 
                használjuk, tároljuk és védjük az Ön személyes adatait a hatályos adatvédelmi 
                jogszabályokkal, különösen az EU 2016/679 általános adatvédelmi rendeletével (GDPR) 
                összhangban.
              </p>
            </section>

            <section>
              <h2 className="mb-4">2. Adatkezelő adatai</h2>
              <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                <p><strong>Név:</strong> TechSzerviz</p>
                <p><strong>Székhely:</strong> 1234 Budapest, Technológia utca 42.</p>
                <p><strong>Adószám:</strong> 12345678-1-42</p>
                <p><strong>E-mail:</strong> info@techszerviz.hu</p>
                <p><strong>Telefon:</strong> +36 30 123 4567</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4">3. Kezelt személyes adatok köre</h2>
              <p className="mb-4">
                A szolgáltatásaink nyújtása során az alábbi személyes adatokat kezelhetjük:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2">3.1. Kapcsolatfelvétel és megrendelés</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Név</li>
                    <li>E-mail cím</li>
                    <li>Telefonszám</li>
                    <li>Cím (helyszíni szolgáltatás esetén)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2">3.2. Szervizelés során</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Berendezés típusa és sorozatszáma</li>
                    <li>Hibajelenség leírása</li>
                    <li>Eszközön tárolt adatok (csak a javításhoz szükséges mértékben)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2">3.3. Számlázási adatok</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Számlázási név és cím</li>
                    <li>Adószám (vállalkozások esetén)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4">4. Adatkezelés jogalapja és célja</h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="mb-2">4.1. Szerződés teljesítése (GDPR 6. cikk (1) b) pont)</h3>
                  <p>
                    Az Ön által megrendelt szolgáltatások teljesítéséhez, a javítási munka 
                    elvégzéséhez és dokumentálásához szükséges adatok kezelése.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="mb-2">4.2. Jogi kötelezettség teljesítése (GDPR 6. cikk (1) c) pont)</h3>
                  <p>
                    Számlázási és könyvelési kötelezettségek teljesítése a számviteli és adózási 
                    jogszabályok alapján.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="mb-2">4.3. Jogos érdek (GDPR 6. cikk (1) f) pont)</h3>
                  <p>
                    Ügyfélkapcsolat fenntartása, garanciális igények kezelése, jogviták rendezése.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="mb-2">4.4. Hozzájárulás (GDPR 6. cikk (1) a) pont)</h3>
                  <p>
                    Hírlevél küldése, marketing célú megkeresések (csak kifejezett hozzájárulás esetén).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4">5. Adattárolás időtartama</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Szerződéses adatok:</strong> A szerződés teljesítéséig, majd a garanciális 
                  igények érvényesítési idejéig (minimum 30 nap)
                </li>
                <li>
                  <strong>Számlázási adatok:</strong> 8 év (számviteli törvény szerinti megőrzési kötelezettség)
                </li>
                <li>
                  <strong>Marketing adatok:</strong> A hozzájárulás visszavonásáig, vagy az utolsó 
                  kapcsolatfelvételtől számított 3 évig
                </li>
                <li>
                  <strong>Eszközön tárolt adatok:</strong> A javítás befejezéséig, majd azonnali törlés
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">6. Adatbiztonság</h2>
              <p className="mb-4">
                A TechSzerviz megfelelő technikai és szervezési intézkedésekkel védi a személyes 
                adatokat a jogosulatlan hozzáférés, megváltoztatás, nyilvánosságra hozatal vagy 
                megsemmisítés ellen.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Jelszóval védett rendszerek használata</li>
                <li>Adatok titkosított tárolása</li>
                <li>Hozzáférési jogosultságok korlátozása</li>
                <li>Rendszeres biztonsági mentések</li>
                <li>A javítás során használt eszközök adatainak teljes törlése munka végeztével</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">7. Adattovábbítás</h2>
              <p className="mb-4">
                A TechSzerviz az Ön személyes adatait harmadik félnek nem adja át, kivéve:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Jogi kötelezettség esetén (pl. hatósági megkeresés)</li>
                <li>Könyvelési és adózási feladatok teljesítéséhez (könyvelő iroda)</li>
                <li>Kézbesítési szolgáltatás igénybevétele esetén (futárszolgálat)</li>
              </ul>
              <p className="mt-4">
                Adatait az Európai Unión kívülre nem továbbítjuk.
              </p>
            </section>

            <section>
              <h2 className="mb-4">8. Az érintett jogai</h2>
              <p className="mb-4">
                A GDPR alapján Ön az alábbi jogokkal rendelkezik:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3>Tájékoztatáshoz való jog</h3>
                  <p className="text-sm">Jogosult tájékoztatást kérni az általunk kezelt személyes adatairól.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3>Helyesbítéshez való jog</h3>
                  <p className="text-sm">Kérheti a pontatlan adatok javítását vagy kiegészítését.</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3>Törléshez való jog ("elfeledtetéshez való jog")</h3>
                  <p className="text-sm">Bizonyos esetekben kérheti adatai törlését.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3>Adatkezelés korlátozásához való jog</h3>
                  <p className="text-sm">Kérheti adatai kezelésének korlátozását.</p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3>Adathordozhatósághoz való jog</h3>
                  <p className="text-sm">Jogosult adatai strukturált, géppel olvasható formában történő megkapására.</p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3>Tiltakozáshoz való jog</h3>
                  <p className="text-sm">Tiltakozhat személyes adatai kezelése ellen.</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3>Visszavonáshoz való jog</h3>
                  <p className="text-sm">Hozzájáruláson alapuló adatkezelés esetén bármikor visszavonhatja hozzájárulását.</p>
                </div>
              </div>

              <p className="mt-4">
                Jogai gyakorlásához forduljon hozzánk az <strong>info@techszerviz.hu</strong> e-mail címen.
              </p>
            </section>

            <section>
              <h2 className="mb-4">9. Panasztételhez való jog</h2>
              <p className="mb-4">
                Ha úgy érzi, hogy megsértettük adatvédelmi jogait, panaszt tehet a Nemzeti 
                Adatvédelmi és Információszabadság Hatóságnál (NAIH):
              </p>
              <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                <p><strong>Név:</strong> Nemzeti Adatvédelmi és Információszabadság Hatóság</p>
                <p><strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.</p>
                <p><strong>Telefon:</strong> +36 1 391 1400</p>
                <p><strong>E-mail:</strong> ugyfelszolgalat@naih.hu</p>
                <p><strong>Weboldal:</strong> www.naih.hu</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4">10. Cookie-k (Sütik)</h2>
              <p className="mb-4">
                Weboldalunk alapvető működéséhez szükséges sütiket használ. Ezek a sütik nem 
                gyűjtenek személyes információkat, csak a weboldal megfelelő működését szolgálják.
              </p>
              <p>
                Marketing vagy nyomkövető sütiket nem használunk.
              </p>
            </section>

            <section>
              <h2 className="mb-4">11. Adatvédelmi nyilatkozat módosítása</h2>
              <p className="mb-4">
                A TechSzerviz fenntartja a jogot jelen adatvédelmi nyilatkozat módosítására. 
                A módosításokról weboldalunkon keresztül tájékoztatjuk ügyfeleinket.
              </p>
              <p className="mb-4">
                <strong>Hatálybalépés:</strong> 2024. január 1.
              </p>
              <p>
                <strong>Utolsó módosítás:</strong> 2024. október 9.
              </p>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="mb-4">Kapcsolat</h2>
              <p className="mb-4">
                Ha kérdése van adatvédelmi gyakorlatunkkal kapcsolatban, vagy szeretné gyakorolni 
                adatvédelmi jogait, kérjük, vegye fel velünk a kapcsolatot:
              </p>
              <div className="space-y-2 bg-blue-50 p-4 rounded-lg">
                <p><strong>E-mail:</strong> info@techszerviz.hu</p>
                <p><strong>Telefon:</strong> +36 30 123 4567</p>
                <p><strong>Cím:</strong> 1234 Budapest, Technológia utca 42.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
