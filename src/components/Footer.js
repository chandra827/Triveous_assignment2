import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    // Main footer container with background color and top border
    <footer className="bg-[#FBFDFF] border-t">
      {/* Centering and padding for the content within the footer */}
      <div className="mx-auto w-full max-w-screen-xl pt-10 px-2.5 md:px-20">
        {/* Flex container for layout with space between elements */}
        <div className="flex justify-between pb-24">
          {/* Left section with Outpost information */}
          <div className="space-y-4 max-w-md">
            {/* Outpost title */}
            <h6 className="tracking-[0.2em] text-2xl">THE OUTPOST</h6>
            {/* Outpost tagline */}
            <h6 className="font-semibold text-xl">Your one-stop AI hub</h6>
            {/* Outpost description */}
            <p className="text-[#696969] text-[17px]">
              The Outpost is a comprehensive collection of curated artificial
              intelligence software tools that cater to the needs of small
              business owners, bloggers, artists, musicians, entrepreneurs,
              marketers, writers, and researchers.
            </p>
          </div>
          {/* Right section with navigation and social links */}
          <div className="flex gap-x-16">
            <div className="space-y-4">
              {/* Navigation section title */}
              <h6 className="font-semibold text-xl">The Outpost</h6>
              {/* Navigation links */}
              <ul className="space-y-2">
                <li className="text-[#696969] hover:underline underline-offset-4 cursor-pointer text-lg">
                  About us
                </li>
                <li className="text-[#696969] hover:underline underline-offset-4 cursor-pointer text-lg">
                  Terms and conditions
                </li>
                <li className="text-[#696969] hover:underline underline-offset-4 cursor-pointer text-lg">
                  Privacy policy
                </li>
                <li className="text-[#696969] hover:underline underline-offset-4 cursor-pointer text-lg">
                  Contact us
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              {/* "Keep in touch" section title */}
              <h6 className="font-semibold text-xl">Keep in touch</h6>
              {/* Social media icons */}
              <div className="flex gap-x-4">
                <Twitter className="h-9 w-9 bg-[#EDECEC] text-[#424141] fill-[#424141] p-2 rounded-full" />
                <Instagram className="h-9 w-9 bg-[#EDECEC] text-[#424141]  p-2.5 rounded-full" />
                <Linkedin className="h-9 w-9 bg-[#EDECEC] text-[#424141]  p-2.5 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Line above Copyright Text */}
      {/* Border line with 3/4 width, centered horizontally and margin on top */}
      <div className="border-t w-3/4 mx-auto my-1"></div>
      {/* Copyright Line */}
      {/* Copyright text centered, vertically padded */}
      <div className="text-center py-4 text-[#696969]">
        © 2023 Triveous Technologies Private Limited
      </div>
    </footer>
  );
};

export default Footer;
