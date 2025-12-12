"use client";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { socials } from "@/constant";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const springOptions = { bounce: 0.1 };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="overflow-hidden">
      <div className="container border-t border-gray-50 dark:border-gray-200/30!">
        <div className="flex md:flex-none flex-row-reverse justify-between items-center">
          <TextLoop className="text-sm text-muted-foreground">
            <span>&copy; 2025 JMDev.</span>
            <span>Created by John Mark Depaclayon.</span>
            <span>johnmarkdepaclayon10@gmail.com</span>
          </TextLoop>
          <div className="md:flex gap-2 text-xs hidden">
            {socials.map((social, i) => (
              <Magnetic
                key={i}
                intensity={0.2}
                springOptions={springOptions}
                actionArea="global"
                range={100}
              >
                <Link href={social.link} target="_blank">
                  <span className="bg-secondary hover:bg-[#fe3211] dark:hover:bg-[#fe3211] hover:text-white transition-colors font-medium px-4 py-1 rounded-full flex items-center gap-0.5 dark:bg-gray-200/20">
                    {social.name} <ArrowUpRight size={15} />
                  </span>
                </Link>
              </Magnetic>
            ))}
          </div>
          <div
            onClick={scrollToTop}
            className="rounded-full md:hidden bg-color text-white animate-bounce p-1"
          >
            <ArrowUp size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
