"use client";
import { projectsData } from "@/lib/data";
import { useHeadreActive } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  const { ref } = useHeadreActive("Projects", 0.1);
  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <h2 className="mb-8 text-center text-3xl font-medium capitalize">
        my Projects
      </h2>
      <div>
        {projectsData.map((project, index) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ amount: 0.4 }}
            key={index}
            className="group mb-3 last:mb-0 sm:mb-8"
          >
            <Link href={project.github} target="_blank">
              <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:border-stone-400/20 dark:bg-[#22222C] dark:hover:bg-[#22222C]/50 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8">
                <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
                  <h3 className="flex gap-1 text-2xl font-semibold dark:text-slate-400">
                    {project.icon}
                    {project.title}
                  </h3>
                  <p className="mt-0 leading-relaxed text-gray-700 dark:text-white">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
                    {project.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="select-none rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase -tracking-wider text-white dark:bg-[#3ABF94]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <Image
                  src={project.imageUrl}
                  alt={project.alt}
                  placeholder="blur"
                  quality={100}
                  priority={true}
                  className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40
                            group-even:right-[initial]
                            group-hover:-translate-x-3
                            group-hover:translate-y-3
                            group-hover:-rotate-2
                            group-hover:scale-[1.04]
                            group-even:group-hover:translate-x-3
                            group-even:group-hover:translate-y-3
                            group-even:group-hover:rotate-2
                          sm:block
                                "
                />
              </section>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
