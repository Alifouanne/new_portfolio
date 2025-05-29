import AirbnbImg from "@/public/Airbnb.png";
import AmazonImg from "@/public/amazon.png";
import ChatImg from "@/public/chat.png";
import CryptoImg from "@/public/crypto.png";
import GymImg from "@/public/gym.png";
import InvoiceMint from "@/public/Invoice_Mint.png";
import JobForge from "@/public/job-forge.png";
import MetaImg from "@/public/meta.png";
import NotateImg from "@/public/Notate.png";
import WeatherImg from "@/public/weather.png";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoMeta } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { CiMemoPad } from "react-icons/ci";
import { FaAirbnb, FaBlog, FaReact, FaUniversity } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbBrandNextjs, TbFileInvoice } from "react-icons/tb";
import { WiDayLightning } from "react-icons/wi";
import BlogSphere from "../public/BlogSphere.png";
import Footflair from "../public/Foot Flair Image.png";
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
  {
    title: "SaaS Notes App",
    icon: React.createElement(CiMemoPad),
    description:
      "This website is SaaS Note App enable you create and edit your Nots online.",
    tags: ["Next.JS 14", "Tailwind", "Kinde", "ShadCn", "Supabase", "Stripe"],
    imageUrl: NotateImg,
    alt: "NoteApp Image",
    liveDemo: "https://notes-saas-zeta.vercel.app/",
    github: "https://github.com/Alifouanne/notes-saas",
  },
  {
    title: "Airbnb Clone",
    icon: React.createElement(FaAirbnb),
    description:
      "This website is a SaaS platform that enables you to list and rent properties, make reservations, and manage your bookings online.",
    tags: ["Next.JS 14.1", "Tailwind", "Kinde", "ShadCn", "Supabase", "Prisma"],
    imageUrl: AirbnbImg,
    alt: "AirbnbApp Image",
    liveDemo: "https://airbnb-clone-khaki-chi.vercel.app",
    github: "https://github.com/Alifouanne/airbnb-clone",
  },
  {
    title: "Foot Flair",
    icon: React.createElement(GiRunningShoe),
    description:
      "Foot Flair is a modern, full-featured e-commerce application for selling shoes.",
    tags: [
      "Next.JS 14.2",
      "Tailwind",
      "Kinde",
      "ShadCn",
      "Neon",
      "Prisma",
      "Redis",
    ],
    imageUrl: Footflair,
    alt: "Foot Flair Image",
    liveDemo: "https://foot-flair.vercel.app/",
    github: "https://github.com/Alifouanne/foot-flair",
  },
  {
    title: "Blog Sphere",
    icon: React.createElement(FaBlog),
    description:
      "Blog Sphere is a powerful, feature-rich blogging platform that enables users to create and manage multiple blogs with ease.",
    tags: [
      "Next.JS 15",
      "Tailwind",
      "Kinde",
      "ShadCn",
      "Supabase",
      "Prisma",
      "Novel",
      "Stripe",
    ],
    imageUrl: BlogSphere,
    alt: "Blog Sphere Image",
    liveDemo: "https://blog-sphere-lemon.vercel.app/",
    github: "https://github.com/Alifouanne/blog_sphere",
  },
  {
    title: "Invoice Mint",
    icon: React.createElement(TbFileInvoice),
    description:
      "InvoiceMint is a modern, user-friendly invoicing platform that empowers businesses and freelancers to create, manage, and track professional invoices effortlessly.",
    tags: [
      "Next.JS 15",
      "Tailwind",
      "Next Auth",
      "ShadCn",
      "Neon",
      "Prisma",
      "Mailtrap",
      "Jspdf",
    ],
    imageUrl: InvoiceMint,
    alt: "Invoice Mint Image",
    liveDemo: "https://invoice-mint.vercel.app",
    github: "https://github.com/Alifouanne/invoice_mint",
  },
  {
    title: "Job Forge",
    icon: React.createElement(MdOutlineWorkOutline),
    description:
      "A modern, full-stack job board application built with Next.js 15, featuring advanced job posting, search capabilities, and seamless user experience.",
    tags: [
      "Next.JS 15",
      "TypeScript",
      "Framer Motion",
      "Stripe",
      "Tailwind",
      "Next Auth",
      "ShadCn",
      "Prisma",
      "Resend",
      "Inngest",
      " Arcjet",
    ],
    imageUrl: JobForge,
    alt: "Job Forge Image",
    liveDemo: "https://job-forge.vercel.app",
    github: "https://github.com/Alifouanne/job-forge",
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
