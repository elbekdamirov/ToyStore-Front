import React from "react";
import { social } from "../static";

const Footer = () => {
  return (
    <footer className="bg-[#A5C926] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex  flex-row justify-between items-center  gap-6">
          <h2 className="text-xl font-semibold">ToyStore</h2>

          <ul className="flex gap-6 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Catalog</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>

          <div className="flex gap-4">
            {social?.map((item, i) => (
              <img className="w-4" key={i} src={item} alt="" />
            ))}
          </div>
        </div>

        <hr className="border-[#FFFFFF40] my-6" />

        <div className="flex flex-col md:flex-row justify-between text-sm opacity-80 gap-4">
          <p>
            Created with love by
            <span className="font-medium">Elastic Themes</span>
          </p>
          <div className="flex gap-4">
            <a href="#">Powered by Webflow</a>
            <span>•</span>
            <a href="#">Style Guide</a>
            <span>•</span>
            <a href="#">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
