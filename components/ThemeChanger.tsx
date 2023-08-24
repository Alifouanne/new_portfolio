"use client";
import { useTheme } from "@/context/ThemeContextProvider";
import { motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";
const ThemeChanger = () => {
  const button = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 100,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 10,
        bounce: 0.3,
      },
    },
    hover: { scale: 1.3 },
    tap: {
      scale: 0.9,
      transition: {
        type: "tween",
      },
    },
  };

  const { theme, themeHandler } = useTheme();
  return (
    <motion.button
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-black/5 bg-white/80 shadow-2xl backdrop-blur-[0.5rem]
      dark:border-stone-400/40 dark:bg-[#3ABF94]/60"
      variants={button}
      initial="hidden"
      animate="show"
      whileHover="hover"
      whileTap="tap"
      onClick={themeHandler}
    >
      {theme === "light" ? (
        <motion.div whileTap={{ x: 100 }}>
          <BsSun />
        </motion.div>
      ) : (
        <motion.div whileTap={{ x: 100 }}>
          <BsMoon />
        </motion.div>
      )}
    </motion.button>
  );
};

export default ThemeChanger;
