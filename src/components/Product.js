import { Bookmark, Circle, Award, Eye } from "lucide-react";
import React from "react";

// Product component
const Product = () => {
  return (
    // Main container for the product information with styling
    <div className=" h-[216px] flex flex-col justify-around  border border-gray-300/50 rounded-md px-6  py-4">
      {/* Flex container for header section with product logo, title, and bookmark icon */}
      <div className="flex justify-between items-center">
        {/* Left section with product logo and title */}
        <div className="flex gap-x-3">
          {/* Product logo */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-3B7EoJiI1WxE_ga3c8_r1TDdkmcg9La80QMuOLXTQ&s"
            alt="chatgpt logo with text"
            className="rounded-md h-12 w-12 object-cover"
          />
          {/* Product title and subtitle */}
          <div className="flex flex-col justify-around">
            <h2 className="font-semibold">ChatGPT</h2>
            <span className="text-sm text-[#636363] flex gap-x-1 items-center">
              OpenAI <Circle className="h-1 w-1 fill-current" /> Assistance
            </span>
          </div>
        </div>
        {/* Bookmark icon */}
        <Bookmark className="h-6 w-6 text-[#636363]" />
      </div>
      {/* Product description */}
      <p className="text-[#696969] text-sm py-4">
        These tools will help designers to experiment with different prompts and
        also receive feedback on the designs you created
      </p>
      {/* Flex container for metadata section with award status, views, and likes */}
      <div className="flex text-[#636363] justify-between items-center">
        {/* Award status with border and rounded styling */}
        <div className=" flex items-center gap-x-1 border text-sm rounded-md border-gray-300/45 py-1 px-2 ">
          <Award className="h-3 w-3" />
          Free
        </div>
        {/* Views and likes metadata */}
        <div className="flex text-sm gap-x-4">
          {/* Views count */}
          <div className="flex gap-x-1 items-center">
            <Eye className="h-3 w-3" /> 1.2M
          </div>
          {/* Likes count */}
          <div className="flex gap-x-1 items-center">
            <Bookmark className="h-3 w-3" />
            700k
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
