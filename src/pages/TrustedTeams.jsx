import React from "react";
import SEO from "../assets/SEO.png";
import SITE from "../assets/SITE.png";
import Traffic2 from "../assets/Traffic2.png";
import Smart from "../assets/Smart.png";

const TrustedTeams = () => {
  const teamLogos = [
    { name: "Acme Corp", icon: "⫸", active: true },
    { name: "PULSE", icon: "⚡" },
    { name: "Quantum", icon: "⌘" },
    { name: "Echo Valley", icon: "✕" },
    { name: "Outside", icon: "⌂" },
    { name: "APEX", icon: "⚛" },
    { name: "Celestial", icon: "✴" },
    { name: "2TWICE", icon: "⇄" },
  ];

  return (
    <div>
      {/* "Trusted by..." section */}
      <div className="text-center text-gray-400 text-xl font-medium mt-16 mb-8">
        Trusted by the world's most innovative teams
      </div>
      {/* Logos/Buttons Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {teamLogos.map((logo, index) => (
          <button
            key={index}
            className={`relative flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-700/50 h-32 transition-all duration-200
              ${
                logo.active
                  ? "bg-purple-800/30 border-purple-600/50 text-purple-200"
                  : "bg-zinc-800/50 hover:bg-purple-800/30 text-gray-200 hover:text-purple-200"
              }`}
          >
            <div className="text-4xl mb-2">{logo.icon}</div>
            <span className="text-sm font-semibold">{logo.name}</span>
          </button>
        ))}
      </div>

      {/* New Text Section */}
      <div className="mt-20">
        <p className="text-center text-4xl md:text-4xl max-w-2xl mx-auto leading-normal">
          Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
        </p>
      </div>

      {/* Updated 4-Panel Grid Section - Asymmetrical layout with logo panels smaller */}
      <div id="features-section" className="mt-20 max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          {/* Panel 1 - SEO goal setting (Top Left - Smaller) */}
          <div className="md:col-span-2 relative flex flex-col justify-end p-8 bg-black rounded-2xl border border-zinc-800/50 h-96 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={SEO} 
                alt="SEO goal setting" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="w-full h-full bg-zinc-900/50 flex items-center justify-center"><div class="w-28 h-28 rounded-full border-2 border-gray-700 relative"><div class="absolute inset-0 bg-gradient-to-tr from-purple-400/50 to-purple-800/50 rounded-full blur-xl opacity-50"></div><div class="absolute inset-0 w-full h-full border border-gray-700 rounded-full"></div></div></div>';
                }}
              />
            </div>
            <div className="relative z-10 bg-black/80 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-white">SEO goal setting</h3>
              <p className="text-gray-400">Helps you set and achieve SEO goals with guided assistance.</p>
            </div>
          </div>

          {/* Panel 2 - User-friendly dashboard (Top Right - Larger) */}
          <div className="md:col-span-3 relative flex flex-col justify-end p-8 bg-black rounded-2xl border border-zinc-800/50 h-96 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={SITE} 
                alt="User-friendly dashboard" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="w-full h-full bg-zinc-900/50 flex items-center justify-center"><div class="w-48 h-32 bg-zinc-800/50 rounded-lg border border-zinc-700"></div></div>';
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Panel 3 - Visual reports (Bottom Left - Larger) */}
          <div className="md:col-span-3 relative flex flex-col justify-end p-8 bg-black rounded-2xl border border-zinc-800/50 h-96 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={Traffic2} 
                alt="Visual reports" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="w-full h-full bg-zinc-900/50 flex items-center justify-center"><div class="w-48 h-32 bg-purple-700/40 rounded-lg"></div></div>';
                }}
              />
            </div>
          </div>

          {/* Panel 4 - Smart Keyword Generator (Bottom Right - Smaller) */}
          <div className="md:col-span-2 relative flex flex-col justify-end p-8 bg-black rounded-2xl border border-zinc-800/50 h-96 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={Smart} 
                alt="Smart Keyword Generator" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="w-full h-full bg-zinc-900/50 flex items-center justify-center"><div class="w-24 h-24 bg-purple-600/50 transform rotate-12"></div></div>';
                }}
              />
            </div>
            <div className="relative z-10 bg-black/80 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-white">Smart Keyword Generator</h3>
              <p className="text-gray-400">Automatic suggestions and the best keywords to target.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedTeams;