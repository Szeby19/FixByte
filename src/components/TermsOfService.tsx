import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollArea } from "./ui/scroll-area";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="mb-8 text-center">Általános Szerződési Feltételek</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="mb-4">1. Általános rendelkezések</h2>
              <p className="mb-4">
                Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) tartalmazzák a TechSzerviz 
                (székhely: 1234 Budapest, Technológia utca 42., adószám: 12345678-1-42) által nyújtott 
                számítástechnikai javítási és karbantartási szolgáltatások igénybevételének feltételeit.
              </p>
              <p>
                Az ÁSZF célja a megrendelő és a szolgáltató közötti jogviszony egyértelmű rendezése, 
                a szolgáltatások minőségének és a felek jogainak biztosítása.
              </p>
            </section>

            <section>
              <h2 className="mb-4">2. Szolgáltatások köre</h2>
              <p className="mb-4">A TechSzerviz az alábbi szolgáltatásokat nyújtja:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Asztali számítógépek javítása és szervizelése</li>
                <li>Laptop tisztítás, pasztázás és Windows telepítés/újratelepítés</li>
                <li>Adatmentés és adatvisszaállítás</li>
                <li>Hardver upgrade és bővítés</li>
                <li>Hálózat kiépítés és konfigurálás</li>
                <li>Helyszíni és távoli támogatás</li>
              </ul>
              <p className="mt-4">
                <strong>Fontos:</strong> Mobil eszközök (okostelefonok, táblagépek) javítását NEM vállaljuk.
              </p>
            </section>

            <section>
              <h2 className="mb-4">3. Megrendelés és árajánlat</h2>
              <p className="mb-4">
                A szolgáltatások megrendelése telefonon (+36 30 123 4567), e-mailben (info@techszerviz.hu) 
                vagy személyesen történhet.
              </p>
              <p className="mb-4">
                Minden megrendelés előtt ingyenes állapotfelmérést végzünk, amelyet követően részletes 
                árajánlatot adunk a szükséges munkálatokról és a várható költségekről.
              </p>
              <p>
                A javítást csak a megrendelő kifejezett jóváhagyása után kezdjük meg.
              </p>
            </section>

            <section>
              <h2 className="mb-4">4. Árak és fizetési feltételek</h2>
              <p className="mb-4">
                A weboldalon feltüntetett árak tájékoztató jellegűek, forintban értendők, és az ÁFÁ-t tartalmazzák.
              </p>
              <p className="mb-4">
                A fizetés módja:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Készpénz a munka átadásakor</li>
                <li>Banki átutalás (előre egyeztetett esetekben)</li>
              </ul>
              <p className="mt-4">
                A berendezés csak a teljes összeg kiegyenlítése után adható ki.
              </p>
            </section>

            <section>
              <h2 className="mb-4">5. Szavatosság és garancia</h2>
              <p className="mb-4">
                Az elvégzett munkákra 30 napos garanciát vállalunk. A garancia az elvégzett javításra 
                és a beépített alkatrészekre vonatkozik.
              </p>
              <p className="mb-4">
                A garancia nem terjed ki:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mechanikai sérülésekre</li>
                <li>Víz- vagy nedvességkárra</li>
                <li>Szakszerűtlen használatból eredő hibákra</li>
                <li>Harmadik fél által végzett beavatkozásra</li>
                <li>Vis maior esetekre</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4">6. Adatbiztonság és adatvédelem</h2>
              <p className="mb-4">
                A TechSzerviz mindent megtesz az ügyfelek adatainak védelme érdekében. A javítás során 
                hozzáférést nyerhetünk az eszközön tárolt adatokhoz, amelyeket szigorúan bizalmasan kezelünk.
              </p>
              <p className="mb-4">
                Javasoljuk, hogy javítás előtt készítsen biztonsági mentést fontos adatairól.
              </p>
              <p>
                A személyes adatok kezeléséről bővebben az Adatvédelmi Nyilatkozatban olvashat.
              </p>
            </section>

            <section>
              <h2 className="mb-4">7. Felelősség</h2>
              <p className="mb-4">
                A TechSzerviz nem vállal felelősséget az eszközön tárolt adatok elvesztéséért, kivéve 
                ha az kifejezetten adatmentési szolgáltatás keretében történik.
              </p>
              <p>
                A javítás során okozott károkért a TechSzerviz a magyar jog szerinti felelősséggel tartozik.
              </p>
            </section>

            <section>
              <h2 className="mb-4">8. Eszköz átvétele és tárolása</h2>
              <p className="mb-4">
                A megjavított eszközt az értesítéstől számított 30 napon belül kell átvenni. Ezt követően 
                tárolási díjat számíthatunk fel (1000 Ft/nap).
              </p>
              <p>
                90 nap után a be nem váltott eszközöket a költségek fedezésére értékesíthetjük.
              </p>
            </section>

            <section>
              <h2 className="mb-4">9. Jogviták rendezése</h2>
              <p className="mb-4">
                A TechSzerviz és az ügyfelek közötti esetleges jogvitákat elsősorban békés úton, 
                tárgyalások útján kívánjuk rendezni.
              </p>
              <p>
                Jogvita esetén a felek alávetik magukat a Budapesti Központi Kerületi Bíróság kizárólagos 
                illetékességének.
              </p>
            </section>

            <section>
              <h2 className="mb-4">10. Vegyes rendelkezések</h2>
              <p className="mb-4">
                A TechSzerviz fenntartja a jogot az ÁSZF egyoldalú módosítására. A módosításokról az 
                ügyfeleket a weboldalon keresztül értesítjük.
              </p>
              <p className="mb-4">
                Az ÁSZF hatálybalépésének időpontja: 2024. január 1.
              </p>
              <p>
                Utolsó módosítás dátuma: 2024. október 9.
              </p>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="mb-4">Elérhetőségeink</h2>
              <div className="space-y-2">
                <p><strong>Cím:</strong> 1234 Budapest, Technológia utca 42.</p>
                <p><strong>Telefon:</strong> +36 30 123 4567</p>
                <p><strong>E-mail:</strong> info@techszerviz.hu</p>
                <p><strong>Adószám:</strong> 12345678-1-42</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
