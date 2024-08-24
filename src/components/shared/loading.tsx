import React from "react";
import Orbits from "./orbits";

const LoadingUI = () => {
  return (
    <section className="relative">
      <section className=" z-10 relative container flex flex-col justify-center h-screen items-centner">
        <h1 className="text-2xl lg:text-6xl font-bold">Loading ....</h1>
        <Orbits />
      </section>
    </section>
  );
};

export default LoadingUI;
