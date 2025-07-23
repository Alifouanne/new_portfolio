"use client";

import { m } from "framer-motion";
import { useTheme } from "next-themes";

const Devider = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const lineVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0, // Start with no height
    },
    show: {
      opacity: 1,
      scaleY: 1, // Grow to full height
      transition: {
        delay: 0.125,
        duration: 0.8, // Smoother animation duration
        ease: [0.25, 0.46, 0.45, 0.94], // Custom ease for a more fluid feel
      },
    },
  };

  return (
    <m.div
      className={`my-24 h-16 w-1.5 origin-center transform rounded-full bg-gradient-to-b  from-[#3eb489] to-[#90EE90] shadow-lg`}
      variants={lineVariants}
      initial="hidden"
      whileInView="show" // Trigger animation when in view
      viewport={{ once: true, amount: 0.8 }} // Animate once when 80% in view
    />
  );
};

export default Devider;
