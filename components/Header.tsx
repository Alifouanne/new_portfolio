"use client";

import { useHeaderContaext } from "@/context/HeaderIndecatorProvider";
import { links } from "@/lib/data";
import clsx from "clsx";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { active, setActive, setTimeClick } = useHeaderContaext();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <header className="relative z-50">
      <m.div
        className={clsx(
          "fixed left-1/2 top-0 w-full rounded-none shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]",
          "sm:top-6 sm:w-[36rem] sm:rounded-full",
          isDarkMode
            ? "border border-gray-700/50 bg-gray-800/80 dark:shadow-black/[0.3]" // Dark mode styles
            : "border border-gray-200/50 bg-white/80 shadow-gray-200/[0.03]", // Light mode styles
        )}
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
        <nav className="flex items-center justify-center p-2">
          <m.ul
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
                    "flex w-full items-center justify-center p-3 transition-colors hover:text-gray-950 dark:hover:text-white",
                    {
                      "text-gray-950 dark:text-white": active === link.name,
                    },
                  )}
                  onClick={() => {
                    setActive(link.name);
                    setTimeClick(Date.now());
                  }}
                  title={link.name}
                >
                  {active === link.name ? (
                    <m.span
                      className={clsx(
                        "absolute inset-0 -z-10 rounded-full",
                        isDarkMode
                          ? "bg-gradient-to-r from-[#3ABF94] to-[#45C6F9]" // Dark mode active gradient
                          : "bg-gradient-to-r from-purple-50 to-pink-50", // Light mode active gradient
                      )}
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
                    ></m.span>
                  ) : null}
                  {link.name}
                </Link>
              </li>
            ))}
          </m.ul>
        </nav>
      </m.div>
    </header>
  );
};

export default Header;
