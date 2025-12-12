import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { tools } from "@/constant";
import Image from "next/image";
import React from "react";

const SkillSet = () => {

  return (
    <div className="md:py-4 py-3 group lg:mask-[linear-gradient(to_right,transparent_0,black_200px,black_calc(100%-200px),transparent_100%)] mask-[linear-gradient(to_right,transparent_0,black_70px,black_calc(100%-70px),transparent_100%)]">
      <InfiniteSlider speedOnHover={10} speed={30}>
        {tools.map((tool, i) => (
          <div
            key={i}
            className="px-4 py-2 grayscale group-hover:grayscale-0 duration-300 transition-all"
          >
            <h4 className="md:text-xl text-base flex items-center md:gap-3 gap-2 font-medium">
              <div className="md:max-w-[30px] max-w-[25px]">
                <Image src={tool.img} height={30} width={30} alt={tool.name} />
              </div>
              <span>{tool.name}</span>
            </h4>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default SkillSet;
