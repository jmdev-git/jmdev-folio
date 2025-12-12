import { Highlighter } from "@/components/ui/highlighter";
import { expertise } from "@/constant";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-linear-to-b from-[#fff2ed] to-white dark:from-gray-950 dark:to-gray-900 lg:py-14 py-8"
    >
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-6">
          <div className="lg:max-w-[340px] max-w-[300px] lg:mx-0 mx-auto mask-[linear-gradient(to_top,transparent_0,black_30px)] lg:col-span-1 lg:block hidden">
            <Image
              src="/MyImage.png"
              height={500}
              width={500}
              className="object-cover relative z-10"
              alt="Profile Images"
            />
          </div>
          <div className="flex flex-col justify-between lg:col-span-2">
            <div className="space-y-2 lg:text-left text-center lg:max-w-[680px] md:max-w-xl lg:mx-0 mx-auto">
              <h2 className="heading custom-font">
                About <span className="text-color">Me</span>
              </h2>
              <p className="text-muted-foreground lg:line-clamp-none line-clamp-3">
                I’m John Mark Depaclayon , currently studying at Pangasinan
                State University with a Bachelor’s degree in Information
                Technology . I’m passionate about Frontend Development and
                continuously eager to explore and learn new technologies to
                expand my skills and deliver impactful digital experiences.
              </p>
            </div>
            <div className="lg:mt-0 mt-6">
              <h4 className="text-2xl lg:text-left text-center font-bold mb-6 text-white  tracking-tight">
                <Highlighter
                  action="highlight"
                  color={"#fe3211"}
                  iterations={1}
                  isView={false}
                  animationDuration={1500}
                >
                  <span className="p-2">What I&#39;m Doing!</span>
                </Highlighter>
              </h4>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
               
                {expertise.map((expertise, i) => (
                  <div
                    key={i}
                    className="shadow-sm bg-white dark:bg-none hover:-translate-y-1 hover:shadow-xl transition-all duration-300 dark:bg-gray-800! p-4 rounded-lg text-white space-y-1  relative overflow-hidden border-b-3 border-[#ffbfa8] dark:border-b-3 dark:border-b-gray-200/20"
                  >
                    <div className="absolute size-28 -right-16 -top-20 rounded-full blur-2xl opacity-80 bg-[#ffbfa8] dark:bg-gray-500 z-0" />
                    <div className="relative z-10">
                      <div className="rounded-sm px-2 py-1.5 bg-[#fe3211] text-white shadow-sm inline-block">
                        {expertise.icon}
                      </div>
                      <div className="space-y-0.5">
                        <h4
                          title={expertise.title}
                          className="text-xl font-semibold text-color line-clamp-1 dark:text-white"
                        >
                          {expertise.title}
                        </h4>
                        <p
                          title={expertise.desc}
                          className="text-muted-foreground text-sm line-clamp-3"
                        >
                          {expertise.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
