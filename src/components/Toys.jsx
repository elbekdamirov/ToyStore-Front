import { MoveRight } from "lucide-react";
import React from "react";

const Toys = ({ type, title }) => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container">
        <div className="flex justify-between">
          <h1 className="text-[28px] font-light font-[Varela_Round]">
            {title} Animals
          </h1>
          <a className="flex gap-1" href="#">
            See All Toys <MoveRight strokeWidth={3} />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-[30px]">
          {type?.map((item, i) => (
            <div
              className="rounded-[16px] bg-white py-[33px] px-[44px] flex flex-col items-center shadow-[0px_1px_2px_0px_rgba(0,0,0,0.15)] mb-30"
              key={i}
            >
              <div className="w-[182px]">
                <img className="w-full" src={item} alt="" />
              </div>
              <div className="text-center">
                <p className="mt-[25px] mb-3">TOY</p>
                <span className="py-[2px] px-3 text-white bg-[#A5C926] rounded-full">
                  $ 30.00 USD
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toys;
