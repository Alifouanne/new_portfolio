"use client";
import { m } from "framer-motion";
const Devider = () => {
  const line = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.125 },
    },
  };
  return (
    <m.div
      className="my-24  h-16 w-1 rounded-full bg-gray-200 dark:bg-[#3ABF94]"
      variants={line}
      initial="hidden"
      animate="show"
    />
  );
};

export default Devider;
