"use client";
import { skillsData } from "@/lib/data";
import { useHeadreActive } from "@/lib/hooks";
import { motion } from "framer-motion";
const Skills = () => {
  const { ref } = useHeadreActive("Skills");

  const skillsVariants = {
    hidden: { opacity: 0, y: 100 },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.06 * index,
      },
    }),
    hover: {
      scale: 1.2,
    },
  };
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-32"
    >
      <h2 className="mb-8 text-center text-3xl font-medium capitalize">
        My Skills
      </h2>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-white">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="select-none rounded-full border border-black/10 bg-white px-5 py-3 dark:border-stone-400/20 dark:bg-[#22222C]"
            variants={skillsVariants}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
