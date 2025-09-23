import React, { useState } from "react";
import Client from "../assets/Client.png"; 
      import PurpleBg from '../assets/PurpleBg.jpg';                                    

const Home = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("siteOverview");
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [email, setEmail] = useState("");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // Scroll to the dashboard section when menu items are clicked
    const dashboardSection = document.getElementById('dashboard-section');
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBillingToggle = (period) => {
    setBillingPeriod(period);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
    alert("Thank you for signing up! We'll be in touch soon.");
    setEmail("");
  };

  // Footer button handlers
  const handleFooterButtonClick = (section) => {
    switch (section) {
      case 'features':
        // Scroll to features section
        const featuresSection = document.getElementById('features-section');
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'pricing':
        // Scroll to pricing section
        const pricingSection = document.getElementById('pricing-section');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'contact':
        // Scroll to contact/signup section
        const contactSection = document.getElementById('signup-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'about':
        // You can navigate to an about page or show a modal
        alert('About our company - We are an AI-driven SEO platform...');
        break;
      case 'blog':
        // Navigate to blog page or external link
        window.open('#', '_blank');
        break;
      case 'careers':
        // Navigate to careers page
        window.open('#', '_blank');
        break;
      case 'privacy':
        // Navigate to privacy policy
        window.open('#', '_blank');
        break;
      case 'terms':
        // Navigate to terms of service
        window.open('#', '_blank');
        break;
      default:
        // For other buttons, show a generic message
        alert(`${section.charAt(0).toUpperCase() + section.slice(1)} section coming soon!`);
        break;
    }
  };

  // Pricing data based on billing period
  const pricingData = {
    monthly: {
      basic: 29,
      pro: 79,
      business: 149
    },
    yearly: {
      basic: 278, // 29 * 12 * 0.8 (20% discount)
      pro: 758,   // 79 * 12 * 0.8
      business: 1430 // 149 * 12 * 0.8
    }
  };

 const DashboardContent = () => (
    <div className="p-6">
      {/* Top row with Visibility and Organic Keywords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Visibility Panel */}
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-sm text-gray-400 mb-2">Visibility</h3>
          <div className="flex items-center text-3xl font-bold">
            10.15% <span className="text-sm ml-2 text-green-500">+5.6%</span>
          </div>
          <div className="h-24 mt-4 bg-purple-700/20 rounded-lg"></div>
        </div>

        {/* Organic Keywords Panel */}
        <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
          <h3 className="text-sm text-gray-400 mb-2">Organic Keywords</h3>
          <div className="flex items-center text-3xl font-bold">
            35.6K <span className="text-sm ml-2 text-red-500">-2.5%</span>
          </div>
          <div className="mt-4 space-y-2">
            {[
              "online payment processing",
              "secure transactions",
              "online transaction platform",
              "online shopping payments",
              "e-commerce payment gateway",
              "B2B payment processing",
              "safe online payments",
            ].map((keyword, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-gray-300"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width Traffic Panel */}
      <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-6">
        <h3 className="text-sm text-gray-400 mb-2">Traffic</h3>
        <div className="flex items-center text-3xl font-bold">
          59.8K <span className="text-sm ml-2 text-green-500">+10.7%</span>
        </div>
        <div className="h-32 mt-4 bg-blue-700/20 rounded-lg"></div>
      </div>
    </div>
  );

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
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Landing Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20">
        {/* Badge */}
        <div className="mb-12 mt-6">
  <div className="flex items-center space-x-3 border border-gray-300 px-6 py-3 rounded-full bg-transparent">
    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
    <span className="text-base md:text-lg font-semibold bg-gradient-to-r from-purple-400 via-purple-500 to-gray-400 bg-clip-text text-transparent">
      Latest integration just arrived
    </span>
  </div>
</div>


        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block">Boost your</span>
            <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-gray-300 bg-clip-text text-transparent">
              rankings with AI.
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-lg text-gray-300 text-center max-w-2xl mb-10 leading-relaxed">
          Elevate your site's visibility effortlessly with AI, where
          <br />
          smart technology meets user-friendly SEO tools.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => handleFooterButtonClick('pricing')}
          className="px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
        >
          Start for free
        </button>
      </div>

      {/* Dashboard Section */}
      <div id="dashboard-section" className="relative z-10 w-full mt-20">
        <div className="p-8 bg-black">
          <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl backdrop-blur-3xl bg-zinc-900/50 border border-zinc-800/50">
            <div className="flex h-full min-h-[700px]">
              {/* Sidebar */}
              <div className="w-64 bg-zinc-900/80 p-6 border-r border-zinc-700/50">
                <div className="flex items-center space-x-2 text-white text-xl font-bold mb-8">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  <span>Dashboard</span>
                </div>
                <nav className="space-y-2">
                  {[
                    "siteOverview",
                    "analytics",
                    "smartKeywordGenerator",
                    "goals",
                    "contentEvaluation",
                    "backlinkAudit",
                    "linkOptimizationWizard",
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleMenuItemClick(item)}
                      className={`w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 flex items-center space-x-3
                        ${
                          activeMenuItem === item
                            ? "bg-purple-600/30 text-purple-300 border border-purple-600/50"
                            : "hover:bg-zinc-800/50 text-gray-400"
                        }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                      <span className="font-medium capitalize">
                        {item.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Main content area */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-semibold text-white">
                    {activeMenuItem.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl py-2 px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500 w-64"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Dropdown/Date selector */}
                <div className="flex items-center space-x-2 mb-6 text-gray-400 text-sm">
                  <span className="font-semibold">Jun 24 → Today</span>
                </div>

                <DashboardContent />
              </div>
            </div>
          </div>

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
         
          {/* New 4-Panel Grid Section */}
          <div id="features-section" className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Panel 1 */}
            <div className="relative flex flex-col justify-end p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 h-96">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-28 h-28 rounded-full border-2 border-transparent relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/50 to-purple-800/50 rounded-full blur-xl opacity-50"></div>
                      <div className="absolute inset-0 w-full h-full border border-gray-700 rounded-full"></div>
                      <div className="absolute inset-0 w-full h-full border border-gray-700 rounded-full animate-spin-slow"></div>
                    </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">SEO goal setting</h3>
                <p className="text-gray-400">Helps you set and achieve SEO goals with guided assistance.</p>
            </div>
            {/* Panel 2 */}
            <div className="relative flex flex-col justify-end p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 h-96">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    {/* Placeholder for the dashboard visual */}
                    <div className="w-48 h-32 bg-zinc-800/50 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">User-friendly dashboard</h3>
                <p className="text-gray-400">Perform complex SEO audits and optimizations with a single click.</p>
            </div>
            {/* Panel 3 */}
            <div className="relative flex flex-col justify-end p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 h-96">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    {/* Placeholder for the graph visual */}
                    <div className="w-48 h-32 bg-purple-700/40 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visual reports</h3>
                <p className="text-gray-400">Visual insights into your site's performance.</p>
            </div>
            {/* Panel 4 */}
            <div className="relative flex flex-col justify-end p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 h-96">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    {/* Placeholder for the crystal visual */}
                    <div className="w-24 h-24 bg-purple-600/50 transform rotate-12"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Keyword Generator</h3>
                <p className="text-gray-400">Automatic suggestions and the best keywords to target.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive SEO Features Content Section */}
      <div className="relative w-full mt-20 py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Main Heading */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="block text-white">Elevate your</span>
                <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-gray-300 bg-clip-text text-transparent">
                  SEO efforts.
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your website's search engine performance with our comprehensive suite of AI-powered tools designed for modern SEO success.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* User-friendly dashboard */}
              <div className="group relative bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">User-friendly dashboard</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Perform complex SEO audits and optimizations with a single click. Our intuitive interface makes advanced SEO accessible to everyone.
                  </p>
                </div>
              </div>

              {/* Visual reports */}
              <div className="group relative bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Visual reports</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Visual insights into your site's performance. Transform complex data into clear, actionable insights with beautiful visualizations.
                  </p>
                </div>
              </div>

              {/* Smart Keyword Generator */}
              <div className="group relative bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <span className="text-sm bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full font-semibold absolute -top-2 -right-2">NEW</span>
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Smart Keyword Generator</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatic suggestions and the best keywords to target. AI-powered keyword research that identifies high-impact opportunities.
                  </p>
                </div>
              </div>

              {/* Content evaluation */}
              <div className="group relative bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Content evaluation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Simple corrections for immediate improvements. Get real-time feedback on your content quality and SEO optimization potential.
                  </p>
                </div>
              </div>

              {/* SEO goal setting */}
              <div className="group relative bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">SEO goal setting</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Helps you set and achieve SEO goals with guided assistance. Create measurable objectives and track your progress toward success.
                  </p>
                </div>
              </div>

              {/* Automated alerts */}
              <div className="group relative bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM12 8V4l8 8-8 8V16H4V8h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Automated alerts</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatic notifications about your SEO health, including quick fixes. Stay informed about issues before they impact your rankings.
                  </p>
                </div>
              </div>

              {/* Link Optimization Wizard */}
              <div className="group relative bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Link Optimization Wizard</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Guides you through the process of creating and managing links. Build a powerful link strategy with intelligent recommendations.
                  </p>
                </div>
              </div>

              {/* One-click optimization */}
              <div className="group relative bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">One-click optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Perform complex SEO audits and optimizations with a single click. Automate tedious tasks and focus on strategy.
                  </p>
                </div>
              </div>

              {/* Competitor reports */}
              <div className="group relative bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Competitor reports</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Provides insights into competitors' keyword strategies and ranking. Stay ahead with comprehensive competitive analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to transform your SEO strategy?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI-powered platform to dominate search results.
              </p>
              <button 
                onClick={() => handleFooterButtonClick('pricing')}
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Start your free trial
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Clients Testimonial Section */}
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
    e.target.style.display = "none";
    e.target.parentNode.innerHTML =
      '<div class="w-full h-full bg-purple-600/20 flex items-center justify-center text-purple-300 text-lg font-semibold">Client Photo</div>';
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

      {/* Enhanced Pricing Section */}
      <div id="pricing-section" className="relative w-full mt-20 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the right plan to meet your SEO needs and start optimizing today.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-1 flex">
              <button 
                onClick={() => handleBillingToggle("monthly")}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  billingPeriod === "monthly" 
                    ? "bg-purple-600/30 text-purple-300 border border-purple-600/50" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => handleBillingToggle("yearly")}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  billingPeriod === "yearly" 
                    ? "bg-purple-600/30 text-purple-300 border border-purple-600/50" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Yearly <span className="text-green-500 ml-1">(Save 20%)</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Card */}
            <div className="relative group">
              {/* Enhanced Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-700/15 to-purple-900/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Purple Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/30 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              
              <div className="relative bg-zinc-900/70 border border-zinc-700/50 rounded-2xl p-8 transition-all duration-300 group-hover:border-purple-500/70 group-hover:shadow-2xl group-hover:shadow-purple-500/20 h-full flex flex-col backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <div className="text-3xl font-bold mb-2">
                  ${billingPeriod === "monthly" ? pricingData.monthly.basic : pricingData.yearly.basic}
                  <span className="text-lg font-normal">/{billingPeriod === "monthly" ? "mo" : "yr"}</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {billingPeriod === "yearly" ? "Billed yearly" : "Billed monthly"}
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Keyword optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Automated meta tags</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>SEO monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Monthly reports</span>
                  </li>
                </ul>
                
                <button className="w-full py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl font-semibold hover:bg-purple-600 hover:border-purple-500 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                  Try for free
                </button>
              </div>
            </div>

            {/* Pro Card */}
            <div className="relative group">
              {/* Enhanced Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 via-purple-700/20 to-purple-900/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Purple Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/40 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              
              <div className="relative bg-zinc-900/70 border border-zinc-700/50 rounded-2xl p-8 transition-all duration-300 group-hover:border-purple-400/80 group-hover:shadow-2xl group-hover:shadow-purple-400/25 h-full flex flex-col backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-3xl font-bold mb-2">
                  ${billingPeriod === "monthly" ? pricingData.monthly.pro : pricingData.yearly.pro}
                  <span className="text-lg font-normal">/{billingPeriod === "monthly" ? "mo" : "yr"}</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {billingPeriod === "yearly" ? "Billed yearly" : "Billed monthly"}
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Keyword optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Automated meta tags</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>SEO monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Monthly reports</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Content suggestions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Link optimization</span>
                  </li>
                </ul>
                
                <button className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-purple-400/40">
                  Get started
                </button>
              </div>
            </div>

            {/* Business Card */}
            <div className="relative group">
              {/* Enhanced Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-purple-700/25 to-purple-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Purple Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/50 to-purple-400/40 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              
              <div className="relative bg-zinc-900/70 border border-zinc-700/50 rounded-2xl p-8 transition-all duration-300 group-hover:border-purple-300/90 group-hover:shadow-2xl group-hover:shadow-purple-300/30 h-full flex flex-col backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Business</h3>
                <div className="text-3xl font-bold mb-2">
                  ${billingPeriod === "monthly" ? pricingData.monthly.business : pricingData.yearly.business}
                  <span className="text-lg font-normal">/{billingPeriod === "monthly" ? "mo" : "yr"}</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {billingPeriod === "yearly" ? "Billed yearly" : "Billed monthly"}
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Keyword optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Automated meta tags</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>SEO monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Monthly reports</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Content suggestions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Link optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Multi-user access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>API integration</span>
                  </li>
                </ul>
                
                <button className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-purple-300/50">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Purple Glow Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl opacity-30"></div>
      </div>



{/* AI-driven SEO Signup Section */}
<div
  id="signup-section"
  className="relative w-full py-32 mt-20"
  style={{
    backgroundImage: `url(${PurpleBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="max-w-4xl mx-auto px-4 text-center">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-black/30"></div> {/* overlay for readability */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
    
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
                <button className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-200">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-200">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.99 3.992-.281 1.188.596 2.16 1.77 2.16 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 01.083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
                <button className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-200">
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

      {/* Additional decorative elements */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
    </div>
  );
};

export default Home;