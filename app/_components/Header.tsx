import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { links } from "@/constant";
import Link from "next/link";
import React from "react";
import { PiTiktokLogo } from "react-icons/pi";
import { TbBrandGithub } from "react-icons/tb";

const Header = () => {
  return (
    <header className="backdrop-blur-sm shadow-sm lg:fixed sticky left-0 w-full top-0 z-100 dark:border-b dark:border-gray-200/30">
      <nav className="lg:px-8 px-4 py-3 flex justify-between items-center">
        <h2 className="text-2xl font-black tracking-tight">
          JM
          <span className="text-color">Dev.</span>
        </h2>
        <div className="flex items-center">
          <ul className="lg:flex hidden gap-6 border-r pr-6 transition-all duration-300 ease-in-out">
            {links.map((link, i) => (
              <Link key={i} href={link.path}>
                <li className="bg-bottom-left bg-color bg-size-[0%_2px] bg-no-repeat hover:bg-size-[100%_2px] transition-all duration-500 ease-out font-medium dark:text-white">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className="ml-6 flex gap-6 items-center">
           <AnimatedThemeToggler className="hover:rotate-45 duration-300 transition" />
            <Link href={"https://github.com/jmdev-git"} target="_blank">
              <Tooltip>
                <TooltipTrigger asChild>
                  <TbBrandGithub size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link href={"https://www.tiktok.com/@jmdiv10"} target="_blank">
              <Tooltip>
                <TooltipTrigger asChild>
                  <PiTiktokLogo size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>TikTok</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
