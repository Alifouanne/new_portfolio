"use client";
import { useHeadreActive } from "@/lib/hooks";
import { motion } from "framer-motion";
const About = () => {
  const text = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.175,
        duration: 0.4,
      },
    },
  };
  const { ref } = useHeadreActive("About");
  return (
    <motion.section
      className="mt-16 flex max-w-[45rem] scroll-mt-52 flex-col items-center justify-center text-center  leading-8"
      variants={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="about"
      ref={ref}
    >
      <h2 className="mb-8 text-center text-3xl font-medium capitalize">
        About me
      </h2>
      <p className="text-lg">
        {" "}
        Software Engineer passionate about Front-end development. Over 2 years
        of experience specializing in{" "}
        <span className="bg-gradient-to-r from-[#6257b4] to-[#ca4d52] bg-clip-text text-transparent dark:from-[#45C6F9] dark:to-[#8CFBA1]">
          React JS, Next JS, and TypeScript.{" "}
        </span>
        Proficient in creating high-quality, responsive web apps. Skilled in
        building efficient, scalable code and optimizing performance for
        seamless cross-browser compatibility.
      </p>
    </motion.section>
  );
};

export default About;
