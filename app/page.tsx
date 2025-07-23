"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading"; // Import the redesigned Loading component

// Dynamically import all your sections
const Intro = dynamic(() => import("@/components/Intro"), { suspense: true });
const Devider = dynamic(() => import("@/components/Devider"), {
  suspense: true,
});
const About = dynamic(() => import("@/components/About"), { suspense: true });
const Projects = dynamic(() => import("@/components/Projects"), {
  suspense: true,
});
const Skills = dynamic(() => import("@/components/Skills"), { suspense: true });
const Experience = dynamic(() => import("@/components/Experience"), {
  suspense: true,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  suspense: true,
});

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center px-4">
      {/* Each dynamically imported component is wrapped in Suspense.
          The fallback will be the Loading component you just redesigned.
          This provides a smooth loading experience for each section as it becomes ready. */}
      <Suspense fallback={<Loading />}>
        <Intro />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Devider />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Devider />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Devider />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Devider />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Devider />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    </main>
  );
}
