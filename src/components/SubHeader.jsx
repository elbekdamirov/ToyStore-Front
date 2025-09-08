import React from "react";
import { social } from "../static";

const SubHeader = () => {
  return (
    <div className="bg-[#A5C926] h-8 text-white flex items-center">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center text-[10px]">
            <p>
              Call Us: <a href="tel:+1 213 974-5898">+1 213 974-5898</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:toystore@template.com">toystore@template.com</a>
            </p>
          </div>
          <div className="flex gap-[14.5px]">
            {social?.map((item, i) => (
              <img key={i} src={item} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
