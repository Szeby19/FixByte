import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Router } from "./components/Router";
import { AsztaliPc } from "./components/services/AsztaliPc";
import { LaptopSzerviz } from "./components/services/LaptopSzerviz";
import { Adatmentes } from "./components/services/Adatmentes";
import { HardverUpgrade } from "./components/services/HardverUpgrade";
import { HalozatKiepites } from "./components/services/HalozatKiepites";
import { ReferenceAdmin } from "./components/ReferenceAdmin";
import { ReferencesPage } from "./components/ReferencesPage";
import { TermsOfService } from "./components/TermsOfService";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      {(route) => {
        switch (route) {
          case 'asztali-pc':
            return <AsztaliPc />;
          case 'laptop-szerviz':
            return <LaptopSzerviz />;
          case 'adatmentes':
            return <Adatmentes />;
          case 'hardver-upgrade':
            return <HardverUpgrade />;
          case 'halozat-kiepites':
            return <HalozatKiepites />;
          case 'references':
            return <ReferencesPage />;
          case 'admin':
            return <ReferenceAdmin />;
          case 'aszf':
            return <TermsOfService />;
          case 'adatvedelem':
            return <PrivacyPolicy />;
          default:
            return <HomePage />;
        }
      }}
    </Router>
  );
}