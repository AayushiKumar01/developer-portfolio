import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"
import Project from "@/components/Projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] px-6 py-8 text-white sm:px-10 lg:px-16">
      <Navbar />
      <Hero />
      <Project />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
