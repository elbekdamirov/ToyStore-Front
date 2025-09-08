import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="h-160 bg-[url('/src/assets/hero.png')] bg-cover bg-center grid place-items-center">
      <div className="w-[570px] bg-white text-center px-[77px] py-14 rounded-[16px]">
        <h2 className="text-[#A5C926] text-[13px] mb-4">
          Say Hello to ToyStore!
        </h2>
        <h1 className="text-[39px] font-medium mb-5">
          Free Ecommerce Template for Webflow
        </h1>
        <button className="text-white px-[28px] py-3 bg-[#A5C926] rounded-full">
          Open Catalog
        </button>
      </div>
    </section>
  );
};

export default Hero;
