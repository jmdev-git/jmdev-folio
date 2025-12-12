"use client";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/motion-primitives/image-comparison";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from "@/components/motion-primitives/morphing-dialog";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import { Button } from "@/components/ui/button";
import { projects } from "@/constant";
import { PinIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

const ProjectSection = () => {
  const { theme } = useTheme();
  const springOptions = { bounce: 0.1 };

  return (
    <section
      id="projects"
      className="overflow-hidden bg-linear-to-t from-white to-[#fff2ed] dark:from-gray-900 dark:to-gray-950 lg:py-14 py-8"
    >
      <div className="container">
        <h2 className="heading custom-font text-center">
          Featured <span className="text-color">Projects</span>
        </h2>
        <div className="md:mt-10 mt-8">
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full rounded-lg shadow-sm flex flex-col md:flex-row relative overflow-hidden bg-white dark:bg-gray-800! hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute md:block hidden size-28 -right-16 -top-20 rounded-full blur-2xl opacity-80 bg-[#ffbfa8] dark:bg-gray-500 z-0" />
                  <div className="absolute md:block hidden h-20 w-60 -right-16 -bottom-20 rounded-full blur-2xl opacity-80 bg-[#ffbfa8] dark:bg-gray-500 z-0" />
                <div className="absolute h-[7px] left-0 -bottom-1 w-full md:rounded-r-lg rounded-b-lg bg-[#ffbfa8] dark:bg-gray-200/20 z-0" />
                <MorphingDialog
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <MorphingDialogTrigger>
                    <ImageComparison
                      className="aspect-16/10 rounded-r-none h-60 w-full md:border-r"
                      enableHover
                      springOptions={{
                        bounce: 0.3,
                      }}
                    >
                      <ImageComparisonImage
                        src={project.imgLight}
                        alt="Motion Primitives Light"
                        position="left"
                      />
                      <ImageComparisonImage
                        src={project.imgDark}
                        alt="Motion Primitives Dark"
                        position="right"
                      />
                      <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-xs" />
                    </ImageComparison>
                  </MorphingDialogTrigger>
                  <MorphingDialogContainer>
                    <MorphingDialogContent className="relative">
                      <MorphingDialogImage
                        src={
                          theme === "dark" ? project.imgLight : project.imgDark
                        }
                        alt="Sony Style Store in the Sony Center complex - Berlin, Germany (2000)"
                        className="h-auto w-full max-w-[90vw] rounded-lg object-cover lg:h-[90vh]"
                      />
                    </MorphingDialogContent>
                    <MorphingDialogClose
                      className="fixed right-6 top-6 h-fit w-fit rounded-full bg-gray-900 cursor-pointer dark:bg-white p-1"
                      variants={{
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: { delay: 0.3, duration: 0.1 },
                        },
                        exit: { opacity: 0, transition: { duration: 0 } },
                      }}
                    >
                      <XIcon className="h-5 w-5 text-white dark:text-gray-900" />
                    </MorphingDialogClose>
                  </MorphingDialogContainer>
                </MorphingDialog>
                <div className="px-4 pt-2 pb-4 flex flex-col justify-between md:gap-0 gap-6 relative z-10">
                  <div className="space-y-1 max-w-2xl">
                    <h4 className="md:text-2xl flex items-center gap-1.5 text-xl font-bold tracking-tight text-color dark:text-white">
                      <PinIcon className="text-[#ef1707] dark:text-white" />
                      <span>{project.title}</span>
                    </h4>
                    <p
                      title={project.desc}
                      className="text-muted-foreground lg:line-clamp-3 md:line-clamp-2 line-clamp-3 md:text-base text-sm"
                    >
                      {project.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="rounded-full font-medium text-xs px-4 py-1 bg-[#fff2ed] dark:bg-gray-200/20 text-[#ef1707] dark:text-white"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row items-center gap-2 relative z-10">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="md:w-auto w-full"
                    >
                      <Magnetic
                        intensity={0.2}
                        springOptions={springOptions}
                        actionArea="global"
                        range={100}
                      >
                        {" "}
                        <Button
                          size="sm"
                          className="cursor-pointer w-full rounded-sm shadow-sm bg-color text-white"
                        >
                          <FaLink size={20} /> Take a look
                        </Button>
                      </Magnetic>
                    </Link>
                    <Link
                      href={project.repo}
                      target="_blank"
                      className="w-full"
                    >
                      {" "}
                      <Button
                        size="sm"
                        variant={"ghost"}
                        className="cursor-pointer dark:bg-gray-200/20 md:bg-transparent bg-[#ffe1d4] text-[#ef1707] dark:text-white md:w-auto w-full rounded-sm hover:text-[#ef1707] hover:bg-[#ffe1d4] dark:hover:bg-gray-200/20 transition-colors"
                      >
                        <TbBrandGithub size={20} /> Source Code
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <TextShimmer
            duration={4}
            className="custom-font md:text-3xl text-2xl font-bold tracking-tight"
          >
            More Projects Coming Soon
          </TextShimmer>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
