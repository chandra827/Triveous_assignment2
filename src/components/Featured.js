import { Eye } from "lucide-react";
import React from "react";

const Product = () => {
  return (
    // Main container for the product information
    <div className="h-auto sm:h-[216px] flex flex-col justify-around border border-gray-300/50 rounded-md px-6 py-4">
      {/* Flex container for responsive layout */}
      <div className="flex flex-col justify-between items-center sm:flex-row">
        {/* Left section with product details */}
        <div className="flex gap-x-3">
          <div className="flex flex-col justify-center">
            {/* Product title */}
            <h2 className="font-semibold">
              Generate art with the power of Stable Diffusion
            </h2>
            {/* Description */}
            <div className="text-sm text-[#636363] flex gap-x-1 items-center">
              These tools will help designers to experiment with different prompts and also receive feedback on the designs you created
            </div>
          </div>
        </div>
      </div>
      
      {/* Line above Elon Musk with negative margin */}
      <div className="border-t border-gray-200 my-2 mx-[-24px]"></div>
      
      {/* Flex container for Elon Musk and view count */}
      <div className="flex text-[#636363] justify-between items-center">
        {/* Section with Elon Musk's photo and name */}
        <div className="flex items-center">
          {/* Elon Musk's photo */}
          <img
            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"  
            alt="Elon Musk"
            className="h-6 w-6 rounded-full mr-2"
          />
          {/* Elon Musk's name */}
          <div className="font-semibold text-sm">
            Elon Musk
          </div>
        </div>
        
        {/* Section with view count */}
        <div className="flex text-sm font-semibold gap-x-4">
          <div className="flex gap-x-1 items-center">
            {/* Eye icon for view count */}
            <Eye className="h-3 w-3" /> 1.2M
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
