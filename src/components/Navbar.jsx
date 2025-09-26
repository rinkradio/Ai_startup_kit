import React, { useState, useEffect } from "react";
import { ChevronDown, Users, Briefcase, FileText, MessageSquare } from "lucide-react";

// This is the main Navbar component that includes the scroll effect.
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Function to handle showing the dropdown menu on hover.
  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  // Function to handle hiding the dropdown menu.
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // useEffect hook to add and remove the scroll event listener.
  useEffect(() => {
    const handleScroll = () => {
      // Set the 'scrolled' state to true if the user has scrolled down (window.scrollY > 0).
      // Otherwise, set it to false.
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        flex justify-between items-center py-3 px-6 text-white border-b
        ${scrolled ? "bg-black/50 backdrop-blur-sm border-gray-800" : "bg-black border-transparent"}
      `}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
        </div>
      </div>

      {/* Links */}
      <ul className="hidden md:flex space-x-1 text-sm relative bg-zinc-900/50 rounded-full px-2 py-2 border border-white/20">
        {/* Features Dropdown */}
        <li
          className="relative cursor-pointer flex items-center space-x-1 hover:text-white transition-all duration-200 rounded-full px-4 py-2 hover:bg-zinc-800/80"
          onMouseEnter={() => handleMouseEnter("features")}
        >
          <span>Features</span>
          <ChevronDown size={14} className={`transition-transform ${openDropdown === "features" ? "rotate-180" : ""}`} />

          {openDropdown === "features" && (
            <div className="absolute top-8 left-0 w-[700px] bg-zinc-900 text-white shadow-2xl rounded-xl p-6 flex gap-6 z-50 border border-gray-700">
              {/* Left Side Menu */}
              <div className="flex flex-col space-y-4 w-1/2">
                <div className="hover:bg-zinc-800 p-3 rounded-lg cursor-pointer transition-colors">
                  <h3 className="font-medium text-white">Dashboard</h3>
                  <p className="text-gray-400 text-sm">Perform SEO audits</p>
                </div>
                <div className="hover:bg-zinc-800 p-3 rounded-lg cursor-pointer transition-colors">
                  <h3 className="font-medium text-white">Content evaluation</h3>
                  <p className="text-gray-400 text-sm">Simple corrections</p>
                </div>
                <div className="hover:bg-zinc-800 p-3 rounded-lg cursor-pointer transition-colors">
                  <h3 className="font-medium text-white">SEO goals</h3>
                  <p className="text-gray-400 text-sm">Set and achieve SEO goals</p>
                </div>
                <div className="hover:bg-zinc-800 p-3 rounded-lg cursor-pointer transition-colors">
                  <h3 className="font-medium text-white">Smart Keyword Generator</h3>
                  <p className="text-gray-400 text-sm">Automatic suggestions</p>
                </div>
                <div className="hover:bg-zinc-800 p-3 rounded-lg cursor-pointer transition-colors">
                  <h3 className="font-medium text-white">Automated alerts</h3>
                  <p className="text-gray-400 text-sm">Automatic notifications</p>
                </div>
              </div>

              {/* Right Side Preview */}
              <div className="bg-zinc-800 rounded-lg p-4 w-1/2 flex flex-col justify-between border border-gray-700">
                <div>
                  <span className="text-xs bg-purple-600 px-2 py-1 rounded-full font-medium">
                    NEW
                  </span>
                  <div className="mt-3">
                    <p className="text-lg font-semibold">10.15% <span className="text-green-400">+5.6%</span></p>
                    <p className="text-gray-400 text-sm">Visibility</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-300">
                  Visual reports — Insights into your site performance
                </p>
                <button className="mt-4 text-purple-400 text-sm font-medium hover:underline text-left">
                  See the latest features →
                </button>
              </div>
            </div>
          )}
        </li>

        {/* Developers */}
        <li className="cursor-pointer hover:text-white transition-all duration-200 rounded-full px-4 py-2 hover:bg-zinc-800/80">Developers</li>

        {/* Company Dropdown */}
        <li
          className="relative cursor-pointer flex items-center space-x-1 hover:text-white transition-all duration-200 rounded-full px-4 py-2 hover:bg-zinc-800/80"
          onMouseEnter={() => handleMouseEnter("company")}
        >
          <span>Company</span>
          <ChevronDown size={14} className={`transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`} />

          {openDropdown === "company" && (
            <div className="absolute top-8 left-0 w-80 bg-zinc-900 text-white shadow-2xl rounded-xl p-4 z-50 border border-gray-700">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3 p-3 hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors">
                  <div className="p-2 bg-zinc-800 rounded-lg">
                    <Users size={16} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">About</h3>
                    <p className="text-gray-400 text-sm">Our vision</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors">
                  <div className="p-2 bg-zinc-800 rounded-lg">
                    <Briefcase size={16} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Careers</h3>
                    <p className="text-gray-400 text-sm">Join our team</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors">
                  <div className="p-2 bg-zinc-800 rounded-lg">
                    <FileText size={16} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Press Kit</h3>
                    <p className="text-gray-400 text-sm">Brand assets & media</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors">
                  <div className="p-2 bg-zinc-800 rounded-lg">
                    <MessageSquare size={16} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Contact</h3>
                    <p className="text-gray-400 text-sm">Get in touch</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Other Static Links */}
        <li className="cursor-pointer hover:text-white transition-all duration-200 rounded-full px-4 py-2 hover:bg-zinc-800/80">Blog</li>
        <li className="cursor-pointer hover:text-white transition-all duration-200 rounded-full px-4 py-2 hover:bg-zinc-800/80">Changelog</li>
      </ul>

      {/* Button */}
      <button className="px-6 py-2 bg-purple-600 rounded-lg text-sm hover:bg-purple-700 transition-colors font-medium">
        Join waitlist
      </button>
    </nav>
  );
};

export default Navbar;
