import Nav from "@/components/Nav";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import ToolsMarquee from "@/components/ToolsMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <div id="top" className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1">
        <About />
        <Divider />
        <WhatIDo />
        <Divider />
        <Projects />
        <Divider />
        <ToolsMarquee />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
