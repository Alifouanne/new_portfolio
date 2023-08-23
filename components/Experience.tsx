"use client";
import { useTheme } from "@/context/ThemeContextProvider";
import { experiencesData } from "@/lib/data";
import { useHeadreActive } from "@/lib/hooks";
import { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Experience = () => {
  const { ref } = useHeadreActive("Experience");
  const { theme } = useTheme();
  return (
    <section id="experience" className="  scroll-mt-28" ref={ref}>
      <h2 className="mb-8 text-center text-3xl font-medium capitalize">
        Experience & Qualification
      </h2>
      <VerticalTimeline
        lineColor={theme === "light" ? "#e5e7eb" : "#3ABF94"}
        layout="1-column"
      >
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "#22222C",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid rgba(0,0,0,0.05)"
                    : "1px solid rgb(168 162 158 / 0.2)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "0.5rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid #3ABF94",
                borderRadius: "0.5rem",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#22222C",
                fontSize: "1.5rem",
                boxShadow: "none",
              }}
            >
              <h3 className=" bg-gradient-to-r from-[#6257b4] to-[#ca4d52] bg-clip-text font-semibold capitalize text-transparent dark:from-[#45C6F9] dark:to-[#8CFBA1]">
                {experience.title}
              </h3>
              <p className="!mt-0 font-normal dark:text-[#3ABF94]">
                {experience.location}
              </p>
              <p className="font-normal dark:text-[#3ABF94]">
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
