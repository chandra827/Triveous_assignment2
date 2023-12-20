import React from "react";
import Product from "./Product";
import { ArrowRightIcon } from "lucide-react";
import Featured from "./Featured";

// ProductsMenu component
const ProductsMenu = () => {
  return (
    // Main container with vertical spacing and bottom padding
    <div className="space-y-8 pb-8">
      {/* Section for "More from Us" */}
      <div className="space-y-6">
        {/* Title for the section */}
        <h4 className="text-[#424141] font-bold text-xl">
          More from Us
        </h4>
        {/* Container for displaying products and an arrow icon */}
        <div className="flex items-center gap-x-4">
          {/* Individual Product component */}
          <Product />
          <Product />
          <Product />
          {/* ArrowRightIcon for navigation */}
          <ArrowRightIcon className="text-[#636363] h-10 w-10 cursor-pointer" />
        </div>
      </div>
      {/* Section for "Featured List" */}
      <div className="space-y-6">
        {/* Title for the section */}
        <h4 className="text-[#424141] font-bold text-xl">Featured List</h4>
        {/* Container for displaying featured items and an arrow icon */}
        <div className="flex items-center gap-x-4">
          {/* Individual Featured component */}
          <Featured />
          <Featured />
          <Featured />
          {/* ArrowRightIcon for navigation */}
          <ArrowRightIcon className="text-[#636363] h-10 w-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;
