"use client";

import { experiencesData } from "@/lib/data"; // Assuming experiencesData is correctly defined
import { useHeadreActive } from "@/lib/hooks";
import { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { m } from "framer-motion"; // Import motion for title animation
import { AnimatedGradientText } from "./magicui/animated-text";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/lib/useIsMobile";

const Experience = () => {
  const { ref } = useHeadreActive("Experience");
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const isMobile = useIsMobile();
  return (
    <section
      id="experience"
      className="mb-28 max-w-[50rem] scroll-mt-28 px-4 text-center sm:mb-40"
    >
      <div className="text mb-8 text-center text-3xl font-medium capitalize">
        {isMobile ? (
          <span className="block bg-gradient-to-r from-[#3eb489] to-[#90EE90] bg-clip-text font-bold text-transparent">
            Experience & Qualification
          </span>
        ) : (
          <AnimatedGradientText
            speed={1.5}
            colorFrom="#3eb489"
            colorTo="#90EE90"
          >
            Experience & Qualification
          </AnimatedGradientText>
        )}
      </div>

      <VerticalTimeline
        lineColor={isDarkMode ? "#3ABF94" : "#e5e7eb"} // Dynamic line color
        layout="1-column"
      >
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: isDarkMode
                  ? "rgba(34, 34, 44, 0.8)"
                  : "rgba(255, 255, 255, 0.8)", // Glassmorphism background
                boxShadow: isDarkMode
                  ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                  : "0 8px 32px 0 rgba(0, 0, 0, 0.08)", // Dynamic shadow
                border: isDarkMode
                  ? "1px solid rgba(168, 162, 158, 0.2)"
                  : "1px solid rgba(0,0,0,0.1)", // Dynamic border
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "0.75rem", // Slightly larger border radius for softer look
                backdropFilter: "blur(10px)", // Glassmorphism blur
                WebkitBackdropFilter: "blur(10px)", // For Safari
              }}
              contentArrowStyle={{
                borderRight: isDarkMode
                  ? "0.4rem solid #3ABF94"
                  : "0.4rem solid #9ca3af", // Dynamic arrow color
                borderRadius: "0.5rem",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: isDarkMode ? "#22222C" : "white", // Dynamic icon background
                fontSize: "1.5rem",
                boxShadow: isDarkMode
                  ? "0 0 10px rgba(58, 191, 148, 0.5)"
                  : "0 0 8px rgba(0,0,0,0.1)", // Subtle glow/shadow for icon
                color: isDarkMode ? "#3ABF94" : "#6b7280", // Dynamic icon color
              }}
            >
              <h3
                className={`bg-gradient-to-r from-[#3eb489] to-[#90EE90] bg-clip-text text-xl font-semibold capitalize text-transparent`}
              >
                {experience.title}
              </h3>
              <p className="!mt-0 font-normal text-gray-700 dark:text-gray-300">
                {experience.location}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-300">
                {experience.company}
              </p>
              <p className="!mt-1 !font-normal !text-gray-700 dark:!text-white">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
