"use client";

import { projectsData } from "@/lib/data"; // Assuming projectsData is correctly defined
import { useHeadreActive } from "@/lib/hooks";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"; // Import shadcn/ui Card component
import { Badge } from "@/components/ui/badge"; // Import shadcn/ui Badge component
import { BorderBeam } from "./magicui/border-beam";
import { AnimatedGradientText } from "./magicui/animated-text";
import { useTheme } from "next-themes";

const Projects = () => {
  const { ref } = useHeadreActive("Projects", 0.1);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom ease for a fluid feel
      },
    },
  };

  const tagItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      y: -2, // Slight lift on hover

      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="projects"
      className="mb-28 max-w-[50rem] scroll-mt-28 px-4 text-center sm:mb-40"
    >
      <div className="text mb-8 text-center text-3xl font-medium capitalize">
        <AnimatedGradientText speed={1.5} colorFrom="#3eb489" colorTo="#90EE90">
          My Projects
        </AnimatedGradientText>
      </div>

      <div ref={ref}>
        {projectsData.map((project, index) => (
          <m.div
            key={index}
            variants={projectCardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="group mb-3 last:mb-0 sm:mb-8"
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className={`relative  max-w-[42rem] overflow-hidden rounded-lg shadow-2xl backdrop-blur-md transition-all duration-300
                  ${
                    isDarkMode
                      ? "border-gray-700 bg-gray-800/80 hover:bg-gray-700/80"
                      : "border-gray-200 bg-white shadow-md hover:bg-gray-50"
                  }
                  sm:h-[20rem] sm:pr-8 sm:group-even:pl-8`}
                title={project.alt}
              >
                {/* Animated Border Glow */}
                <m.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: isDarkMode
                      ? "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)"
                      : "linear-gradient(45deg, transparent, rgba(100,100,255,0.1), transparent)",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <CardContent className="relative z-10 flex h-full flex-col px-5 pb-7 pt-2  sm:max-w-[50%] sm:pb-2 sm:pl-10 sm:pr-2  sm:group-even:ml-[18rem]">
                  <h3 className="mb-2 flex items-center gap-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {project.icon && (
                      <span className="text-xl">{project.icon}</span>
                    )}{" "}
                    {/* Render icon if available */}
                    {project.title}
                  </h3>
                  <p className="mb-2 mt-0 leading-relaxed text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mb-2 flex flex-wrap gap-2 sm:mt-auto">
                    {" "}
                    {/* Added mb-4 here */}
                    {project.tags.map((tag, tagIndex) => (
                      <m.div
                        key={tagIndex}
                        variants={tagItemVariants} // Apply new tag item variants
                        initial="hidden"
                        whileInView="show"
                        whileHover="hover" // Apply hover animation
                        whileTap="tap" // Apply tap animation
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + tagIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="select-none rounded-full border border-gray-200 bg-gray-100 px-3 py-1
                            text-[0.7rem] uppercase -tracking-wider text-gray-800
                            dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {tag}
                        </Badge>
                      </m.div>
                    ))}
                  </div>
                </CardContent>
                <Image
                  src={project.imageUrl || "/placeholder.svg"} // Fallback to placeholder
                  alt={project.alt}
                  placeholder="blur"
                  priority={true}
                  className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition-all duration-500
                    group-even:-left-40 group-even:right-[initial]
                    group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
                    group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                    sm:block"
                />
                <BorderBeam duration={8} size={100} />
              </Card>
            </Link>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
