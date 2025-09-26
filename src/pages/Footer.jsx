import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    alert("Thank you for signing up! We'll be in touch soon.");
    setEmail("");
  };

  const handleFooterButtonClick = (section) => {
    switch (section) {
      case 'features':
        const featuresSection = document.getElementById('features-section');
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'pricing':
        const pricingSection = document.getElementById('pricing-section');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'contact':
        const contactSection = document.getElementById('signup-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'about':
        alert('About our company - We are an AI-driven SEO platform...');
        break;
      case 'blog':
        window.open('#', '_blank');
        break;
      case 'careers':
        window.open('#', '_blank');
        break;
      case 'privacy':
        window.open('#', '_blank');
        break;
      case 'terms':
        window.open('#', '_blank');
        break;
      default:
        alert(`${section.charAt(0).toUpperCase() + section.slice(1)} section coming soon!`);
        break;
    }
  };

  // Footer data structure
  const footerData = [
    {
      title: "Product",
      items: ["Features", "Integrations", "Updates", "FAQ", "Pricing", "Contact"]
    },
    {
      title: "Company",
      items: ["About", "Blog", "Careers", "Manifesto", "Press"]
    },
    {
      title: "Resources",
      items: ["Examples", "Community", "Guides", "Docs"]
    },
    {
      title: "Legal",
      items: ["Privacy", "Terms", "Security"]
    }
  ];

  return (
    <>
      {/* AI-driven SEO Signup Section */}
      <div id="signup-section" className="relative w-full py-32 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          
          {/* Square Box with Purple Background */}
          <div className="relative bg-purple-900/30 border border-purple-600/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                <span className="block">AI-driven SEO</span>
                <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-gray-300 bg-clip-text text-transparent">
                  for everyone.
                </span>
              </h2>
              
              {/* Email Signup Form */}
              <form onSubmit={handleEmailSubmit} className="max-w-2xl mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-6 py-4 bg-zinc-900/50 border border-zinc-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg whitespace-nowrap"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              
              {/* Subtext */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-400 text-lg">
                <span>No credit card required</span>
                <span className="hidden sm:block">-</span>
                <span>7-days free trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative w-full bg-black border-t border-zinc-800/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Left Side - Brand and Social Icons */}
            <div className="flex flex-col space-y-8 lg:w-1/3 mb-12 lg:mb-0">
              {/* Brand */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-white">AI Startup Website Kit</span>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.open('#', '_blank')}
                  className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('#', '_blank')}
                  className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.99 3.992-.281 1.188.596 2.16 1.77 2.16 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 01.083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('#', '_blank')}
                  className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="lg:w-2/3 flex justify-end">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl">
                {footerData.map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-6">{column.title}</h3>
                    <ul className="space-y-4">
                      {column.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <button
                            onClick={() => handleFooterButtonClick(item.toLowerCase())}
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-left text-sm"
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="border-t border-zinc-800/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">E</span>
              </div>
              <span className="text-lg font-bold text-white">ElevatSEO</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 ElevatSEO. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;