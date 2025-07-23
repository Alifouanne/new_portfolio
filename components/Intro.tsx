"use client";

import { useHeaderContaext } from "@/context/HeaderIndecatorProvider";
import { useHeadreActive } from "@/lib/hooks";
import Personal from "@/public/personal.jpg"; // Assuming this path is correct and the image exists
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Import shadcn/ui Button
import { AnimatedGradientText } from "./magicui/animated-text";

import { StateButton } from "./ui/stateful-button";
import { useTheme } from "next-themes";
import { Badge } from "./ui/badge";

const Intro = () => {
  const { ref } = useHeadreActive("Home", 0.2);
  const { setActive, setTimeClick } = useHeaderContaext();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const roles = ["Software Engineer", "Front End Developer", "React Developer"];
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children for a smoother reveal
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.7,
      },
    },
  };

  const emojiVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: 0.7, // Delay after image appears
        duration: 0.7,
      },
    },
  };

  const buttonItemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const socialIconVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
    hover: { scale: 1.15 }, // Slightly larger hover for icons
    tap: { scale: 0.9 },
  };
  const badgeItemVariants = {
    // New variant for individual badges
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1, // Staggered delay for each badge
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };

  return (
    <m.section
      className="relative mb-24 mt-16 flex max-w-[50rem] scroll-mt-[90rem] flex-col items-center justify-center overflow-hidden px-8 text-center sm:mb-16" // Changed px-4 to px-8
      variants={containerVariants}
      initial="hidden"
      animate="show"
      id="home"
      ref={ref}
    >
      <div className="relative z-10 flex items-center justify-center">
        <m.div variants={imageVariants}>
          <div className="relative">
            <Image
              src={Personal || "/placeholder.svg"}
              alt="personal image"
              placeholder="blur"
              priority={true}
              className="h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl dark:border-stone-500 sm:h-36 sm:w-36"
            />
            <m.span
              className="absolute bottom-0 right-0 text-3xl sm:text-4xl"
              variants={emojiVariants}
              aria-label="Waving hand emoji"
            >
              👋
            </m.span>
          </div>
        </m.div>
      </div>

      <m.p
        className="mb-10 mt-8 px-4 text-2xl font-medium leading-tight sm:text-4xl"
        variants={itemVariants} // Use itemVariants for paragraph
      >
        <span className="block font-bold">
          <AnimatedGradientText
            speed={1.5}
            colorFrom="#3eb489"
            colorTo="#90EE90"
          >
            Hello, I'm Ali Fouanne.
          </AnimatedGradientText>
        </span>

        <m.div
          className="mt-2 flex flex-wrap justify-center gap-2"
          variants={containerVariants} // Use containerVariants for staggering the badges
          initial="hidden"
          animate="show"
        >
          {roles.map((role, index) => (
            <m.div
              key={role}
              variants={badgeItemVariants}
              custom={index} // Pass index for staggered animation
            >
              <Badge
                variant="secondary"
                className={`rounded-full px-4 py-2 text-sm font-medium sm:text-base
                  ${
                    isDarkMode
                      ? "border border-gray-600 bg-gray-700 text-gray-200"
                      : "border border-gray-200 bg-white text-gray-800 shadow-sm"
                  }
                  transition-colors duration-500`}
              >
                {role}
              </Badge>
            </m.div>
          ))}
        </m.div>
      </m.p>

      <m.div
        className="mb-5 mt-4 flex flex-col items-center justify-center  gap-3 px-4 text-lg font-medium sm:flex-row"
        variants={containerVariants} // Use containerVariants for staggering buttons
        initial="hidden"
        animate="show"
      >
        {/* Contact Me Button - Primary Action */}
        <m.div variants={buttonItemVariants} whileHover="hover" whileTap="tap">
          <Button
            asChild // Use asChild to render Link inside Button for consistent sizing
            className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white transition-all hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-95 dark:bg-[#3ABF94] dark:hover:bg-[#2f9977]"
            title="Contact me"
          >
            <Link
              href="#contact"
              onClick={() => {
                setActive("Contact");
                setTimeClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </m.div>

        {/* Download CV Button - Secondary Action */}
        <m.div variants={buttonItemVariants} whileHover="hover" whileTap="tap">
          <StateButton
            onClick={handleClick}
            className="group flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-7 py-3 text-gray-800 transition-all hover:scale-105 hover:bg-gray-200 focus:scale-105 active:scale-95 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            title="Download CV"
          >
            <a href="/CV.pdf" download>
              Download CV{" "}
            </a>
          </StateButton>
        </m.div>

        {/* LinkedIn Icon - Ghost Button */}
        <m.div variants={socialIconVariants} whileHover="hover" whileTap="tap">
          <Button
            asChild
            variant="ghost" // Using ghost variant for a borderless, background-less icon
            size="icon"
            className="flex items-center justify-center rounded-full p-3 text-gray-700 transition-all hover:scale-110 hover:bg-gray-100 focus:scale-110 active:scale-95 dark:text-stone-300 dark:hover:bg-gray-800"
            title="LinkedIn"
          >
            <a
              href="https://www.linkedin.com/in/ali-fouanne-56b602222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-xl" />
            </a>
          </Button>
        </m.div>

        {/* GitHub Icon - Ghost Button */}
        <m.div variants={socialIconVariants} whileHover="hover" whileTap="tap">
          <Button
            asChild
            variant="ghost" // Using ghost variant for a borderless, background-less icon
            size="icon"
            className="flex items-center justify-center rounded-full p-3 text-gray-700 transition-all hover:scale-110 hover:bg-gray-100 focus:scale-110 active:scale-95 dark:text-stone-300 dark:hover:bg-gray-800"
            title="GitHub"
          >
            <a
              href="https://github.com/Alifouanne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="text-2xl" />
            </a>
          </Button>
        </m.div>
      </m.div>
    </m.section>
  );
};

export default Intro;
