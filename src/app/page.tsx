import React from "react";

import { generalInfo } from "@/data";
import { Button } from "@/components/ui/button";
import Orbits from "@/components/shared/orbits";

import MotionSection from "@/components/shared/motion-section";
import Link from "next/link";

const Home = () => {
  return (
    <section className="relative">
      <MotionSection
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 relative container flex flex-col justify-center items-center text-center lg:text-start lg:items-start h-[calc(100vh-60px)] lg:h-screen"
      >
        {/* Hero Content  */}
        <article className="mb-8 flex flex-col gap-y-2 lg:gap-y-4">
          <h3 className="font-jetbrains font-medium text-base lg:text-lg">
            {generalInfo.hero_info.greeting}
          </h3>
          <h1 className="font-bold text-3xl lg:text-5xl">
            {generalInfo.hero_info.name}
          </h1>
          <h1 className="font-bold text-3xl lg:text-5xl">
            I am a{" "}
            <span className="text-primary-color">
              {generalInfo.hero_info.role}
            </span>
          </h1>
        </article>

        {/* Hero Intro */}
        <p className="text-sm lg:text-base lg:mr-[40%]">
          {generalInfo.hero_info.intro}
        </p>

        {/* CTA Buttons  */}
        <div className="flex justify-center items-center gap-x-4 mt-8 lg:mt-12">
          <Link href="https://github.com/Louai-Zokerburg" target="_blank">
            <Button size="lg">
              <p className="font-semibold text-base lg:text-lg">My Github</p>
            </Button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1c7-UIHy8GUvgj2XHuf7nfhUU4vpjRXSt/view"
            target="_blank"
          >
            <Button variant="secondary" size="lg">
              <p className="font-semibold text-base lg:text-lg">My resume</p>
            </Button>
          </Link>
        </div>

        {/* Hero Cards  */}
        <div className="flex justify-center items-center gap-x-4 mt-8 lg:mt-12">
          <article className="state-card">
            <p className="font-bold text-2xl lg:text-3xl font-jetbrains">
              {generalInfo.hero_info.stats.projects}+
            </p>
            <span>
              <p className="text-base lg:text-lg">Built</p>
              <p className="text-base lg:text-lg">Projects</p>
            </span>
          </article>
          <article className="state-card">
            <p className="font-bold text-2xl lg:text-3xl font-jetbrains">
              {generalInfo.hero_info.stats.experience}+
            </p>
            <span>
              <p className="text-base lg:text-lg">Years</p>
              <p className="text-base lg:text-lg">Experience</p>
            </span>
          </article>
          <article className="state-card">
            <p className="font-bold text-2xl lg:text-3xl font-jetbrains">
              {generalInfo.hero_info.stats.frameworks}+
            </p>
            <span>
              <p className="text-base lg:text-lg">Langs &</p>
              <p className="text-base lg:text-lg">Frameworks</p>
            </span>
          </article>
        </div>
      </MotionSection>

      <Orbits mini={false} />
    </section>
  );
};

export default Home;
