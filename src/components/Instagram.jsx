import React from "react";
import instaimg from "../assets/instaimg.jpg";

const Instagram = () => {
  return (
    <section>
      <div className="container p-30">
        <div className="text-center">
          <span className="text-[13px] text-[#A5C926] mb-[17px]">
            @ElasticThemes
          </span>
          <h1 className="text-[31px] mb-[85px]">We're on Instagram!</h1>
        </div>

        <div className="grid grid-cols-6 gap-[15px]">
          <img src={instaimg} alt="" />
          <img src={instaimg} alt="" />
          <img src={instaimg} alt="" />
          <img src={instaimg} alt="" />
          <img src={instaimg} alt="" />
          <img src={instaimg} alt="" />
        </div>

        <button className="block mx-auto mt-[76px] py-3 px-7 bg-[#A5C926] rounded-full text-white ">
          See More Photos
        </button>
      </div>
    </section>
  );
};

export default Instagram;
