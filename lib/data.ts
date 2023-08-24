import AmazonImg from "@/public/amazon.png";
import ChatImg from "@/public/chat.png";
import CryptoImg from "@/public/crypto.png";
import GymImg from "@/public/gym.png";
import MetaImg from "@/public/meta.png";
import WeatherImg from "@/public/weather.png";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoMeta } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { FaReact, FaUniversity } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandNextjs } from "react-icons/tb";
import { WiDayLightning } from "react-icons/wi";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor in Software Engineering",
    location: "Homs, Syria",
    company: "Al-Baath University",
    description: "I graduated after 6 yars of studying. with GPA 2.96 .",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2015-Sep 2021",
  },
  {
    title: "Front-End Developer",
    location: "Homs, Syria",
    company: "Freelancer",
    description: "I worked as a freelancer front-end developer for 2 years .",
    icon: React.createElement(FaReact),
    date: "Dec 2021 - May 2023",
  },
  {
    title: "Master in Web Science",
    location: "Homs, Syria",
    company: "Syrian Virtual University",
    description:
      "Now I am in the second semester, but I have suspended my registration temporarily",
    icon: React.createElement(FaUniversity),
    date: "Jan 2023 - present",
  },
  {
    title: "Software Enginner",
    location: "Homs, Syria (Remotly)",
    company: "Innovura",
    description: "I worked as software enginner and full-stack developer ",
    icon: React.createElement(TbBrandNextjs),
    date: "Jul 2023 - Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title: " Cloud",
    icon: React.createElement(WiDayLightning),
    description:
      "Cloud is a stunning weather app that provides comprehensive information about any selected city. Built with cutting-edge technologies, it offers a seamless user experience with its intuitive UI and sleek design.",
    tags: ["Next.js", "Stepzen", "Tailwind", "Tremor 2.0"],
    imageUrl: WeatherImg,
    alt: "cloud app image",
    liveDemo: "https://cloud-1huis0xl8-alifouanne.vercel.app/",
    github: "https://github.com/Alifouanne/weather-app",
  },
  {
    title: "ChatGPT clone 2.0",
    icon: React.createElement(HiOutlineChatBubbleLeftRight),
    description:
      "ChatGPT clone 2.0 is an upgraded version of the original ChatGPT clone,includes additional functionality that allows users to select OpenAI models.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase", "NextAuth"],
    imageUrl: ChatImg,
    alt: "chat gpt image",
    liveDemo: "https://chatgpt-2-0-topaz.vercel.app/",
    github: "https://github.com/Alifouanne/chatgpt-2.0",
  },
  {
    title: " Amazone clone 2.0",
    icon: React.createElement(AiOutlineShoppingCart),
    description:
      "The Amazon clone website is a feature-rich e-commerce platform that replicates the functionality and user experience of the popular Amazon website.",
    tags: [
      "Next.js",
      "Firebase",
      "Tailwind",
      "NextAuth",
      "React Query",
      "Zustand",
      "Stripe",
    ],
    alt: "Amazon app image",
    imageUrl: AmazonImg,
    liveDemo: "https://my-amazon-ow8bzod2b-alifouanne.vercel.app/",
    github: "https://github.com/Alifouanne/amazon-new",
  },
  {
    title: "Metavese-x",
    icon: React.createElement(BiLogoMeta),
    description:
      "Metaverse-X is an immersive and informative website that serves as a comprehensive guide to the concept of the metaverse.",
    tags: ["Next.js", "Tailwind", "Framer motion"],
    imageUrl: MetaImg,
    alt: "metaverse app image",
    liveDemo: "https://metaverse-x.vercel.app/",
    github: "https://github.com/Alifouanne/metaverse-x",
  },
  {
    title: "Crypto-Website",
    icon: React.createElement(BsCurrencyBitcoin),
    description:
      "This crypto website is designed to provide users with detailed information and news about various cryptocurrencies.",
    tags: [
      "React.js",
      "Vite",
      "Redux toolkit",
      "RTK Query",
      "Chart js",
      "Framer motion",
      "React Router",
    ],
    imageUrl: CryptoImg,
    alt: "crypto app image",
    liveDemo: "https://crypto-website-eosin.vercel.app/",
    github: "https://github.com/Alifouanne/Crypto-Website",
  },
  {
    title: "Gym profile websit",
    icon: React.createElement(CgGym),
    description:
      "This website is Gym portfolio website that's show gym services.",
    tags: ["React.js", "Framer motion", "Email js "],
    imageUrl: GymImg,
    alt: "gymapp image",
    liveDemo: "https://gym-website-hqa.pages.dev/",
    github: "https://github.com/Alifouanne/gym-website",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind CSS",
  "Prisma",
  "Redux",
  "GraphQL",
  "Apollo",
  "PostgreSQL",
  "Python",
  "SQL",
  "JQuery",
  "Zustand",
  "Material UI",
  "Sass",
  "Framer Motion",
] as const;
