"use client";

import { useHeadreActive } from "@/lib/hooks";
import { m } from "framer-motion";
import { IconCloud } from "./magicui/icon-cloud";
import { AnimatedGradientText } from "./magicui/animated-text";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/lib/useIsMobile";

const slugs = [
  "html5",
  "css",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "git",
  "tailwindcss",
  "prisma",
  "redux",
  "apollographql",
  "postgresql",
  "mysql",
  "jquery",
  "materialdesign",
  "framer",
  "kdeneon",
  "supabase",
  "betterauth",
];
const Skills = () => {
  const { ref } = useHeadreActive("Skills");
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const skillItemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.05 * index, // Slightly faster stagger
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
    hover: {
      scale: 1.05, // More subtle scale
      y: -3, // Slight lift

      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  const isMobile = useIsMobile();
  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-28 max-w-[53rem] scroll-mt-28   px-4 text-center sm:mb-32" // Added px-4 and overflow-hidden
    >
      <div className="text mb-8 text-center text-3xl font-medium capitalize">
        {isMobile ? (
          <span className="block bg-gradient-to-r from-[#3eb489] to-[#90EE90] bg-clip-text font-bold text-transparent">
            My Skills
          </span>
        ) : (
          <AnimatedGradientText
            speed={1.5}
            colorFrom="#3eb489"
            colorTo="#90EE90"
          >
            My Skills
          </AnimatedGradientText>
        )}
      </div>

      <IconCloud images={images} />
    </section>
  );
};

export default Skills;
