import { ShoppingCart } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="h-18 flex">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-[57px]">
          <div className=" font-[Varela_Round] font-light text-[21px]">
            ToyStore
          </div>
          <div className="flex gap-9">
            <ul>
              <li>Catalog</li>
            </ul>
            <ul>
              <li>Delivery</li>
            </ul>
            <ul>
              <li>About</li>
            </ul>
            <ul>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span>
            <a href="#">Cart</a>
          </span>
          <ShoppingCart />
          <span className="bg-[#A5C926] px-1.5 rounded-full">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
