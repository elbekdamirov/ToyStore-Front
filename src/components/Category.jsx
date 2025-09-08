import React from "react";
import teddy from "../assets/teddy.png";
import toy from "../assets/toy.png";

const Category = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container py-40">
        <div className="grid grid-cols-2 gap-[30px] text-white">
          <div className="w-full h-[188px] bg-[#FFC12C] rounded-[16px] flex items-center gap-8">
            <div className="mb-18">
              <img src={teddy} alt="" />
            </div>
            <div>
              <h3 className="text-[28px]">Stuffed Animals</h3>
              <button className="py-2 px-6 bg-white rounded-full text-black text-[13px] mt-4">
                Shop Now
              </button>
            </div>
          </div>
          <div className="w-full h-[188px] bg-[#FB416B] rounded-[16px] flex flex-row-reverse items-center gap-8">
            <div className="mb-18">
              <img src={toy} alt="" />
            </div>
            <div>
              <h3 className="text-[28px]">Wooden Toys</h3>
              <button className="py-2 px-6 bg-white rounded-full text-black text-[13px] mt-4">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
