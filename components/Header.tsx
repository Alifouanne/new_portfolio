"use client";
import { useHeaderContaext } from "@/context/HeaderIndecatorProvider";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  const { active, setActive, setTimeClick } = useHeaderContaext();
  return (
    <header className="relative z-50">
      <motion.div
        className="fixed left-1/2 top-0  w-full  rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-[#22222C]/40 dark:bg-[#22222C]/80 dark:shadow-stone-200/[0.03]  sm:top-6 sm:w-[36rem] sm:rounded-full"
        initial={{
          y: -100,
          opacity: 0,
          x: "-50%",
        }}
        animate={{
          y: 0,
          opacity: 1,
          x: "-50%",
        }}
      >
        <nav className="flex  items-center justify-center p-2 ">
          <motion.ul
            className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 dark:text-stone-200 sm:w-[initial] sm:flex-nowrap sm:gap-5"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.5 }}
          >
            {links.map((link) => (
              <li
                key={link.hash}
                className="relative flex h-3/4 items-center justify-center"
              >
                <Link
                  href={link.hash}
                  className={clsx(
                    " flex w-full items-center justify-center p-3   transition-colors hover:text-gray-950 dark:hover:text-white",
                    {
                      "text-gray-950 dark:text-white": active === link.name,
                    },
                  )}
                  onClick={() => {
                    setActive(link.name);
                    setTimeClick(Date.now());
                  }}
                >
                  {active === link.name ? (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-[#3ABF94]"
                      initial={{
                        y: -100,
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 40,
                        mass: 3,
                        duration: 0.5,
                      }}
                    ></motion.span>
                  ) : null}
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
