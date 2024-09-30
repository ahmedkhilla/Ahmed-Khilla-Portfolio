import Aboutme from "../components/Aboutme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Skills />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default Home;
