import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import HireAsFreelancer from "./components/HireAsFreelancer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <AboutSection /> 
      <ServicesSection />
      <HireAsFreelancer />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
