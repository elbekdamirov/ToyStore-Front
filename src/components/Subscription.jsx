import React from "react";
import telegram from "../assets/telegram.png";

const Subscription = () => {
  return (
    <section>
      <div className="container rounded-[16px] shadow-[0px_1px_2px_0px_#00000026] flex justify-between items-center p-[50px]">
        <div className="flex">
          <div>
            <img className="bg-[#A5C926] p-5" src={telegram} alt="" />
          </div>
          <div className="ml-[23px] text-[23px]">
            <p>Subscribe to our newsletter</p>
            <span>& get </span>
            <span className="text-[#A5C926]">10% discount!</span>
          </div>
        </div>
        <div className="flex gap-4 w-1/2">
          <input
            className="bg-[#F8F8F8] h-[47px] rounded-full w-2/3"
            type="text"
          />
          <button className="bg-[#A5C926] h-[47px] rounded-full w-1/5"></button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
