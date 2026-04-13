import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Formacao from "./components/Formacao";
import Fellowships from "./components/Fellowships";
import Experiencia from "./components/Experiencia";
import Habilidades from "./components/Habilidades";
import TogetherTrial from "./components/TogetherTrial";
import Contadores from "./components/Contadores";
import WhatsAppGrupo from "./components/WhatsAppGrupo";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Formacao />
      <Fellowships />
      <Experiencia />
      <Habilidades />
      <TogetherTrial />
      <Contadores />
      <WhatsAppGrupo />
      <Contato />
      <Footer />
    </>
  );
}
