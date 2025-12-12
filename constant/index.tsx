import { FaBookReader, FaLaptopCode } from "react-icons/fa";
import { RiBrainLine } from "react-icons/ri";

type TagLines = {
  line: string;
  position: string;
  delay: number;
  icon: string;
  duration: number;
};

type TechStack = {
  img: string;
  name: string;
};

type NavLink = {
  name: string;
  path: string;
};

type WhatIDo = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

type FeaturedProjects = {
  id: number;
  imgDark: string;
  imgLight: string;
  title: string;
  desc: string;
  tools: string[];
  link: string;
  repo: string;
};

type SocialMedia = {
  name: string;
  link: string;
};

export const lines: TagLines[] = [
  {
    line: "Code with purpose",
    position: "absolute top-4 -left-24",
    delay: 0,
    icon: "/Code.png",
    duration: 1000,
  },
  {
    line: "Design with passion",
    position:
      "absolute lg:bottom-52 bottom-32 lg:-left-32 lg:right-auto -right-28",
    delay: 0.5,
    icon: "/Passion.png",
    duration: 1500,
  },
  {
    line: "Create with vision",
    position: "absolute bottom-10 -left-14",
    delay: 1,
    icon: "/Eye.png",
    duration: 2000,
  },
];

export const tools: TechStack[] = [
  { img: "/Html.png", name: "HTML" },
  { img: "/Css.png", name: "CSS" },
  { img: "/Javascript.png", name: "Javascript" },
  { img: "/TailwindCss.webp", name: "Tailwind CSS" },
  { img: "/Shadcnui.png", name: "ShadCn UI" },
  { img: "/Mongo.png", name: "Mongo DB" },
  { img: "/Framermotion.svg", name: "Framer Motion" },
  { img: "/TScript.png", name: "Typescript" },
  { img: "/React.png", name: "React" },
  { img: "/Html.png", name: "HTML" },
  { img: "/Css.png", name: "CSS" },
  { img: "/Javascript.png", name: "Javascript" },
  { img: "/TailwindCss.webp", name: "Tailwind CSS" },
  { img: "/Shadcnui.png", name: "ShadCn UI" },
  { img: "/Mongo.png", name: "Mongo DB" },
  { img: "/Framermotion.svg", name: "Framer Motion" },
  { img: "/TScript.png", name: "Typescript" },
  { img: "/React.png", name: "React" },
];

export const links: NavLink[] = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contacts", path: "#contacts" },
];

export const expertise: WhatIDo[] = [
  {
    title: "Web Development",
    desc: "I create modern, responsive, and user-friendly websites that bring ideas to life.",
    icon: <FaLaptopCode size={20} />,
  },
  {
    title: "Problem Solving",
    desc: "I approach challenges with structured thinking and creative solutions.",
    icon: <RiBrainLine size={20} />,
  },
  {
    title: "Continuous Learning",
    desc: "I continuously explore new tools and technologies to enhance my development workflow.",
    icon: <FaBookReader size={20} />,
  },
];

export const projects: FeaturedProjects[] = [
  {
    id: 1,
    imgDark: "/Project1DarkMode.PNG",
    imgLight: "/Project1LightMode.PNG",
    title: "Documate Ai",
    desc: "Documate makes working with documents faster and easier. Instead of copying and pasting answers from an AI into a file, DocuMate automatically places the generated content straight into your document. You can search for your activities or tasks, generate what you need, and instantly export everything as a PDF or DOCX file. It’s a simple and efficient way to turn your ideas or AI-generated content into ready-to-use documents without all the extra steps.",
    tools: ["Nextjs", "ShadCn Ui", "Tailwind CSS", "MongoDB", "OpenAi"],
    link: "https://documate-eight.vercel.app/",
    repo: "https://github.com/jmdev-git/Documate",
  },
  {
    id: 2,
    imgDark: "/Project2DarkMode.PNG",
    imgLight: "/Project2LightMode.PNG",
    title: "Portfolio",
    desc: "I built Portfolio to have a space where I can share the things I’ve created and how I’ve grown as a developer. I wanted it to feel simple, clean, and personal something that truly reflects who I am and what I love doing. Every project here tells a part of my story, from the ideas I’ve explored to the skills I’ve learned along the way. Portfolio isn’t just a showcase it’s a reminder of how far I’ve come and how much more I want to build.",
    tools: [
      "Nextjs",
      "ShadCn Ui",
      "Tailwind CSS",
      "Framer Motion",
      "Typescript",
    ],
    link: "https://jmd-portfolio.vercel.app/",
    repo: "https://github.com/jmdev-git/portfolio",
  },
];

export const socials: SocialMedia[] = [
  { name: "Facebook", link: "https://web.facebook.com/depaclayon.jm" },
  { name: "TikTok", link: "https://www.tiktok.com/@jmdiv10" },
  { name: "Github", link: "https://github.com/jmdev-git" },
];
