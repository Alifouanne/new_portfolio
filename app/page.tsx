import About from "@/components/About";
import Contact from "@/components/Contact";
import Devider from "@/components/Devider";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Devider />
      <About />
      <Devider />
      <Projects />
      <Devider />
      <Skills />
      <Devider />
      <Experience />
      <Devider />
      <Contact />
    </main>
  );
}
