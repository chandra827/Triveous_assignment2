import { Bookmark, ExternalLink, Eye, Heart, Share2 } from "lucide-react";
import ChatGPTLogo from "../assets/chatgpt_logo.png";

// Header component
const Header = () => {
  return (
    // Main container with flex layout, justifying between items and providing padding-bottom
    <div className="flex justify-between items-start pb-4">
      {/* Left section with ChatGPT logo and information */}
      <div className="flex gap-x-4">
        {/* ChatGPT logo */}
        <img
          src={ChatGPTLogo}
          className="rounded-lg aspect-auto h-24"
          alt="chatgpt logo"
        />
        {/* Container for ChatGPT information */}
        <div className="flex flex-col justify-between">
          {/* ChatGPT title and subtitle */}
          <div className="font-semibold">
            <h2 className="text-2xl">ChatGPT</h2>
            <span className="text-[#636363]">by OpenAI</span>
          </div>
          {/* Metadata with likes and views */}
          <div className="flex text-[#696969] text-sm gap-x-4">
            {/* Likes count */}
            <div className="flex gap-x-1 items-center">
              <Heart className="h-3 w-3" /> 700k Likes
            </div>
            {/* Views count */}
            <div className="flex gap-x-1 items-center">
              <Eye className="h-3 w-3" /> 1.2M Views
            </div>
          </div>
        </div>
      </div>
      {/* Right section with action buttons */}
      <div className="flex gap-x-3">
        {/* Like button */}
        <button
          type="button"
          className="py-2 px-4 flex gap-x-3 items-center bg-purple-800 rounded-md text-white">
          <Bookmark className="h-5 w-5" />
          <span className="text-sm">Like</span>
        </button>
        {/* Visit Site button */}
        <button
          type="button"
          className="py-2 px-4 flex gap-x-3 items-center border border-purple-800/20 rounded-md text-purple-800">
          <ExternalLink className="h-5 w-5" />
          <span className="text-sm">Visit Site</span>
        </button>
        {/* Share button */}
        <button
          type="button"
          className="py-2 px-4 flex gap-x-3 items-center border border-purple-800/20 rounded-md text-purple-800">
          <Share2 className="h-5 w-5" />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
