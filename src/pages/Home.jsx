// import React, { useState } from "react";
import Footer from "./Footer";
import Pricing from "./Pricing";
import OurClients from "./OurClients";
import SeoEfforts from "./SeoEfforts";
import TrustedTeams from "./TrustedTeams";
import Dashboard from "./Dashboard";


const Home = () => {


  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-black to-black"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Landing Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20">
        {/* Badge */}
        <div className="mb-8">
          <div className="flex items-center space-x-5 bg-purple-900/30 border border-purple-600/30 px-4 py-2 rounded-full mt-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-purple-300 font-medium">
              Latest integration just arrived
            </span>
          </div>
        </div>

        {/* Main Heading */}
<div className="text-center mb-8">
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-normal md:leading-tight">
    <span className="block mb-2 md:mb-2">Boost your</span> {/* Increased spacing */}
    <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-gray-300 bg-clip-text text-transparent py-4">
  rankings with AI.
</span>
  </h1>
</div>

{/* Subtext */}
<p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-10 leading-relaxed mt-4"> {/* Increased top margin */}
  Elevate your site's visibility effortlessly with AI, where
  <br />
  smart technology meets user-friendly SEO tools.
</p>

      {/* CTA Button */}
<button 
  onClick={() => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
>
  Start for free
</button>
      </div>


{/* Other Sections */}
<Dashboard />
<TrustedTeams />
<SeoEfforts />
<OurClients />
<Pricing />
<Footer />

      {/* decorative elements */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
    </div>
  );
};

export default Home;