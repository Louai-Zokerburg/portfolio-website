import React from "react";
import Image from "next/image";

import orbit_3_light from "@/assets/orbit_3_light.svg";
import orbit_2_light from "@/assets/orbit_2_light.svg";
import orbit_1_light from "@/assets/orbit_1_light.svg";
import orbit_3_dark from "@/assets/orbit_3_dark.svg";
import orbit_2_dark from "@/assets/orbit_2_dark.svg";
import orbit_1_dark from "@/assets/orbit_1_dark.svg";

const Orbits = ({ mini }: { mini?: boolean }) => {
  return (
    <div
      className={`fixed top-0 border-accent-color-light dark:border-accent-color-dark flex justify-end items-center w-full ${
        mini ? "h-[30vh] lg:h-[50vh] border-b-4" : "h-screen border-b-0"
      } overflow-hidden`}
    >
      <div className="hidden dark:lg:flex h-[900px] w-[900px] justify-center items-center">
        <Image
          src={orbit_3_dark}
          alt="orbig"
          className="spin-orbit-3 z-0 absolute w-[350px]"
        />
        <Image
          src={orbit_2_dark}
          alt="orbig"
          className="spin-orbit-2 z-0 absolute w-[650px]"
        />
        <Image
          src={orbit_1_dark}
          alt="orbig"
          className="spin-orbit-1 z-0 absolute w-[900px]"
        />
      </div>

      <div className="dark:hidden relative h-[900px] w-[900px] hidden lg:flex justify-center items-center">
        <Image
          src={orbit_3_light}
          alt="orbig"
          className="spin-orbit-3 z-0 absolute w-[350px]"
        />
        <Image
          src={orbit_2_light}
          alt="orbig"
          className="spin-orbit-2 z-0 absolute w-[650px]"
        />
        <Image
          src={orbit_1_light}
          alt="orbig"
          className="spin-orbit-1 z-0 absolute w-[900px]"
        />
      </div>
    </div>
  );
};

export default Orbits;
