import { Bookmark } from "lucide-react";
import React from "react";

// Navbar component
const Navbar = () => {
  return (
    // Main container with full width, flex layout, justification between items, and padding
    <div className="w-full flex justify-between items-center py-6">
      {/* Outpost title with custom styling */}
      <h1 className="tracking-[0.2em] text-2xl">THE OUTPOST</h1>
      {/* Navigation links with custom styling */}
      <ul className="flex items-center gap-x-10 font-semibold">
        {/* Individual navigation items with links */}
        <li>
          <a href="/">AI tools</a>
        </li>
        <li>
          <a href="/">Submit</a>
        </li>
        <li>
          <a href="/">Newsletter</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
      </ul>
      {/* User actions section with gap, including bookmark icon and user avatar */}
      <div className="flex gap-x-6 items-center">
        {/* Bookmark icon with custom styling */}
        <Bookmark className="h-6 w-6 text-purple-800 fill-current" />
        {/* User avatar image with rounded styling */}
        <img
          src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
          className="rounded-full h-6 w-6"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
