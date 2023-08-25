import dynamic from "next/dynamic";
const Intro = dynamic(() => import("@/components/Intro"));
const Devider = dynamic(() => import("@/components/Devider"));
const About = dynamic(() => import("@/components/About"));
const Projects = dynamic(() => import("@/components/Projects"));
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Contact = dynamic(() => import("@/components/Contact"));
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
