"use client";

import { links } from "@/lib/data";
import Logo from "@/public/logo.png"; // Assuming this path is correct and the image exists
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion"; // Import motion for animations
import clsx from "clsx"; // Import clsx for conditional class names
import { useTheme } from "next-themes";

const Footer = () => {
  const tags = links.slice(0, 5);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <m.footer
      className={clsx(
        "mb-0 mt-24 w-full rounded-t-lg shadow-lg backdrop-blur-md", // Adjusted margin-bottom and added rounded-t-lg
        isDarkMode
          ? "border-t border-gray-700/50 bg-gray-800/80 shadow-black/[0.3]" // Dark mode styles
          : "border-t border-gray-200/50 bg-white/80 shadow-gray-200/[0.03]", // Light mode styles
      )}
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Animate once when 30% in view
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <m.div variants={itemVariants}>
            <Image
              src={Logo || "/placeholder.svg"}
              className="mb-2 mr-3 h-8 w-8 sm:mb-0"
              alt="Logo"
            />
          </m.div>
          <m.ul
            className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0"
            variants={footerVariants} // Use footerVariants for staggering list items
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {tags.map((link, key) => (
              <m.li key={key} variants={itemVariants}>
                <Link
                  href={link.hash}
                  className={clsx(
                    "mr-4 transition-colors hover:text-gray-950 md:mr-6",
                    isDarkMode
                      ? "text-stone-200 hover:text-[#3ABF94]"
                      : "text-gray-700 hover:text-gray-950", // Dynamic text colors
                  )}
                  title={link.name}
                >
                  {link.name}
                </Link>
              </m.li>
            ))}
          </m.ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <m.span
          className={`block bg-gradient-to-r ${
            isDarkMode
              ? "from-[#45C6F9] to-[#8CFBA1]"
              : "from-[#6257b4] to-[#ca4d52]"
          } bg-clip-text text-sm text-transparent sm:text-center`}
          variants={itemVariants}
        >
          © 2023 Eng Ali Fouanne . All Rights Reserved.
        </m.span>
      </div>
    </m.footer>
  );
};

export default Footer;
