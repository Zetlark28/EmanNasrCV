import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Experience />
        <Services />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
