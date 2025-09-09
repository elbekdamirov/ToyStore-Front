import { memo } from "react";
import hero from "../assets/about.png";
import { Play } from "lucide-react";

const About = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 text-center text-white"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="relative z-10 container max-w-2xl mx-auto px-4">
        <p className="text-[#A5C926] text-sm uppercase mb-4">About The Shop</p>
        <h2 className="text-4xl font-semibold mb-6">Watch Our Story</h2>
        <p className="text-center text-gray-200 mb-8 max-w-">
          There is no magic formula to write perfect ad copy. It is based on a
          number of factors, including ad placement, demographic, even the
          consumer’s mood.
        </p>

        <div className="h-16 w-16 mx-auto bg-[#A5C926] flex items-center justify-center cursor-pointer">
          <Play size={28} color="white" />
        </div>
      </div>
    </section>
  );
};

export default memo(About);
