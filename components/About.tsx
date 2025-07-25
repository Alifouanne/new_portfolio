"use client";

import { useHeadreActive } from "@/lib/hooks";
import { m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "./magicui/magic-card";
import { AnimatedGradientText } from "./magicui/animated-text";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/lib/useIsMobile";

const About = () => {
  const { ref } = useHeadreActive("About");
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const skills = [
    { name: "React JS", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Next JS", level: 90, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
  ];

  // Define new gradients for skill sliders
  const skillGradients = [
    {
      light: "from-blue-400 to-purple-400",
      dark: "from-blue-400 to-purple-400",
    }, // Softer Blue to Purple
    { light: "from-green-400 to-teal-400", dark: "from-green-400 to-teal-400" }, // Softer Green to Teal
    { light: "from-orange-400 to-red-400", dark: "from-orange-400 to-red-400" }, // Softer Orange to Red
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  const isMobile = useIsMobile();

  return (
    <m.section
      className="relative mt-16 flex max-w-[45rem] scroll-mt-52 flex-col items-center justify-center px-4 text-center leading-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      id="about"
      ref={ref}
    >
      <div className="text mb-8 text-center text-3xl font-medium capitalize">
        {isMobile ? (
          <span className="block bg-gradient-to-r from-[#3eb489] to-[#90EE90] bg-clip-text font-bold text-transparent">
            About Me
          </span>
        ) : (
          <AnimatedGradientText
            speed={1.5}
            colorFrom="#3eb489"
            colorTo="#90EE90"
          >
            About Me
          </AnimatedGradientText>
        )}
      </div>
      {/* Main Content Card with Glassmorphism */}
      <m.div variants={itemVariants} className="w-full">
        <Card
          className={`relative border ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          } ${
            isDarkMode ? "bg-gray-800/80" : "bg-white shadow-md"
          } overflow-hidden shadow-xl backdrop-blur-md`} /* Adjusted background and border for light mode */
        >
          <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
            {/* Animated Border */}
            {isMobile ? (
              ""
            ) : (
              <>
                <m.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: isDarkMode
                      ? "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)" // Subtle white glow for dark mode
                      : "linear-gradient(45deg, transparent, rgba(100,100,255,0.1), transparent)", // Softer blue glow for light mode
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
              </>
            )}

            <CardContent className="relative z-10 p-8">
              <div className="space-y-8">
                {/* Animated Text Reveal */}
                <m.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                    <m.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="inline-block"
                    >
                      Software Engineer passionate about Front-end development.
                    </m.span>{" "}
                    <m.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="inline-block"
                    >
                      Over 2 years of experience specializing in{" "}
                    </m.span>
                    <span
                      className={`bg-gradient-to-r from-[#3eb489] to-[#90EE90] bg-clip-text font-semibold text-transparent`}
                    >
                      React JS, Next JS, and TypeScript.{" "}
                    </span>
                    <m.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="inline-block"
                    >
                      Proficient in creating high-quality, responsive web apps.
                      Skilled in building efficient, scalable code and
                      optimizing performance for seamless cross-browser
                      compatibility.
                    </m.span>
                  </p>
                </m.div>

                {/* Animated Skills with Progress Bars */}
                <div className="space-y-4">
                  <m.h3
                    className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Technical Expertise
                  </m.h3>

                  {skills.map((skill, index) => (
                    <m.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <m.span
                          className="text-sm text-muted-foreground"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.5 + index * 0.1,
                          }}
                        >
                          {skill.level}%
                        </m.span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <m.div
                          className={`h-full bg-gradient-to-r ${
                            isDarkMode
                              ? skillGradients[index].dark
                              : skillGradients[index].light
                          } relative rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.2,
                            delay: 1.2 + index * 0.1,
                            ease: "easeOut",
                          }}
                        >
                          {/* Animated Shine Effect */}
                          {isMobile ? (
                            ""
                          ) : (
                            <m.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: 2 + index * 0.2,
                                repeatDelay: 3,
                              }}
                            />
                          )}
                        </m.div>
                      </div>
                    </m.div>
                  ))}
                </div>

                {/* Floating Action Badges */}
                <div className="flex flex-wrap justify-center gap-3 pt-6">
                  {["Frontend", "Full-Stack", "UI/UX"].map((badge, index) => (
                    <m.div
                      key={badge}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="cursor-pointer bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 transition-shadow hover:shadow-lg dark:bg-gray-700 dark:text-gray-200"
                      >
                        {badge}
                      </Badge>
                    </m.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Card>
      </m.div>
      {isMobile ? (
        ""
      ) : (
        <div>
          {/* Particle Effect */}
          <div className="pointer-events-none absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <m.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </m.section>
  );
};

export default About;
