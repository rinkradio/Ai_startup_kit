import React from "react";
import Client from '../assets/Client.png';

const OurClients = () => {
  return (
    <div className="relative w-full mt-20 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Our clients</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hear firsthand how our solutions have
              <br />
              boosted online success for users like you.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-b from-purple-900/20 to-black/40 border border-purple-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2 border-purple-500/30 bg-gradient-to-br from-purple-400/20 to-purple-600/20">
                    {/* Replace this placeholder with your image */}
                 <img 
  src={Client} 
  alt="Client testimonial" 
  className="w-full h-full object-cover"
  onError={(e) => {
    // Fallback if image doesn't load
    e.target.style.display = 'none';
    e.target.parentNode.innerHTML = '<div class="w-full h-full bg-purple-600/20 flex items-center justify-center text-purple-300 text-lg font-semibold">Client Photo</div>';
  }}
/>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-1 text-left lg:text-left">
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                    "This product has completely transformed how I manage my projects and deadlines"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-white">Talia Taylor</div>
                    <div className="text-gray-400">Digital Marketing Director @ Quantum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className="mt-16 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500/50 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;