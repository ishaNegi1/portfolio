import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import AssistantButton from "@/components/assistant/AssistantButton";

export default function HomePage() {
  return (
    <>

      <ScrollProgress />

      <Navbar />

      <main className="relative overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        {/* <section id="certificates">
          <Certificates />
        </section> */}

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      <AssistantButton />
    </>
  );
}