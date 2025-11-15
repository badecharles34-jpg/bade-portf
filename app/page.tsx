// NOTE: This application is a static portfolio website. It does not contain any integration with the Gemini API or other AI services.
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-premium-black">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}