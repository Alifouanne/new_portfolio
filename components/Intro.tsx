"use client";
import { useHeaderContaext } from "@/context/HeaderIndecatorProvider";
import { useHeadreActive } from "@/lib/hooks";
import Personal from "@/public/personal.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
const Intro = () => {
  const buttons = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
      },
    },
  };
  const emoje = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150, delay: 0.1, duration: 0.7 },
    },
  };
  const image = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { type: "tween" } },
  };
  const paragraph = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  const links1 = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 100,
    },
    hover: { scale: 1.1 },
    tap: {
      scale: 0.9,
      transition: {
        type: "tween",
      },
    },
  };
  const links2 = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 100,
    },
    hover: { scale: 1.2 },
    tap: {
      scale: 0.9,
      transition: {
        type: "tween",
      },
    },
  };
  const { ref } = useHeadreActive("Home", 0.2);
  const { setActive, setTimeClick } = useHeaderContaext();

  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-[90rem] text-center sm:mb-16"
      id="home"
      ref={ref}
    >
      <div className="flex  items-center justify-center">
        <div className="relative ">
          <motion.div variants={image} initial="hidden" animate="show">
            <Image
              src={Personal}
              alt="personal image"
              placeholder="blur"
              quality={100}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl dark:border-stone-500"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-2xl"
            variants={emoje}
            initial="hidden"
            animate="show"
          >
            🤙
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb10 mt-4 px-4  text-2xl font-medium sm:text-4xl"
        variants={paragraph}
        initial="hidden"
        animate="show"
      >
        <span className="block  font-bold">Hello, I'm Ali Fouanne.</span>
        <span className="bg-gradient-to-r from-[#6257b4] to-[#ca4d52] bg-clip-text text-2xl text-transparent dark:from-[#45C6F9] dark:to-[#8CFBA1]">
          Software Engineer | Front End Developer | React Developer
        </span>{" "}
      </motion.p>
      <motion.div
        className="mt-4 flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        variants={buttons}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={links1}
          initial="hidden"
          animate="show"
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white transition-colors hover:bg-gray-950 dark:bg-[#3ABF94] dark:hover:bg-[#2f9977]"
            onClick={() => {
              setActive("Contact");
              setTimeClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.a
          className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 dark:bg-[#22222C]"
          variants={links1}
          initial="hidden"
          animate="show"
          whileHover="hover"
          whileTap="tap"
          download
          href="/CV.pdf"
        >
          Downloda CV{" "}
          <HiDownload className="transition-transform group-hover:translate-y-1" />
        </motion.a>
        <motion.a
          className="flex items-center gap-2 rounded-full bg-white px-7 py-3 text-gray-700 transition-colors  hover:text-gray-950 dark:bg-[#22222C] dark:text-stone-300 dark:hover:text-white"
          variants={links2}
          initial="hidden"
          animate="show"
          whileHover="hover"
          whileTap="tap"
          href="https://www.linkedin.com/in/ali-fouanne-56b602222/"
          target="_blank"
        >
          <BsLinkedin />
        </motion.a>
        <motion.a
          className="flex items-center gap-2 rounded-full bg-white  px-7 py-3 text-[1.35rem] text-gray-700 transition-colors hover:text-gray-950 dark:bg-[#22222C] dark:text-stone-300 dark:hover:text-white"
          variants={links2}
          initial="hidden"
          animate="show"
          whileHover="hover"
          whileTap="tap"
          href="https://github.com/Alifouanne"
          target="_blank"
        >
          <FaGithubSquare />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Intro;
