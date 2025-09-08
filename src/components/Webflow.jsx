import React from "react";
import spooderman from "../assets/spooderman.png";

const Webflow = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container p-30">
        <div className="text-center w-1/3 mx-auto">
          <span className="text-[#A5C926] font-light text-[13px] mb-[18px]">
            Made for Webflow
          </span>
          <h1 className="mb-[95px] font-light text-[31px] font-[Varela_Round]">
            Simple & Colorful Ecommerce Template for Your Business
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h2 className="font-[Varela_Round] text-[31px] mb-[51px]">
              Available for FREE!
            </h2>
            <p className="text-[#999999] text-[17px] mb-[26px] w-2/3">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy
            </p>
            <button className="py-3 px-7 bg-[#A5C926] text-white rounded-full">
              GET IT NOW!
            </button>
          </div>
          <div className="w-1/2">
            <img src={spooderman} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webflow;
