import React, { useState } from "react";
import visibilityGraph from "../assets/visibility.png";
import trafficGraph from "../assets/traffic.png";

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("siteOverview");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // Scroll to the dashboard section when menu items are clicked
    const dashboardSection = document.getElementById('dashboard-section');
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const DashboardContent = () => (
    <div className="p-6">
      {/* Top row with Visibility and Organic Keywords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Visibility Panel - Updated with purple background and graph image */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/30 border border-purple-600/30 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm text-purple-200 font-medium">Visibility</h3>
            <div className="flex items-center text-xs text-purple-300 bg-purple-800/40 px-2 py-1 rounded">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
              Jun 18
              <span className="mx-1">→</span>
              Today
            </div>
          </div>
          <div className="flex items-center text-3xl font-bold text-white mb-2">
            10.15% <span className="text-sm ml-2 text-green-400 bg-green-900/30 px-2 py-1 rounded">+5.6%</span>
          </div>
          <div className="h-32 mt-4 bg-purple-900/20 rounded-lg overflow-hidden">
            {/* Replace with your actual visibility graph image */}
            <img 
              src={visibilityGraph} 
              alt="Visibility Graph" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't load
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<div class="w-full h-full bg-gradient-to-r from-purple-600/30 to-purple-400/20 flex items-center justify-center text-purple-200">Visibility Graph</div>';
              }}
            />
          </div>
        </div>

        {/* Organic Keywords Panel - Enhanced styling */}
        <div className="bg-gradient-to-br from-purple-800/30 to-purple-600/20 border border-purple-600/30 rounded-xl p-6 shadow-lg">
          <h3 className="text-sm text-purple-200 font-medium mb-2">Organic Keywords</h3>
          <div className="flex items-center text-3xl font-bold text-white mb-4">
            35.6K <span className="text-sm ml-2 text-red-400 bg-red-900/30 px-2 py-1 rounded">-2.5%</span>
          </div>
          <div className="mt-4 space-y-3 max-h-48 overflow-y-auto pr-2">
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
                className="flex items-center text-sm text-purple-100 bg-purple-900/20 px-3 py-2 rounded-lg hover:bg-purple-800/30 transition-colors duration-200"
              >
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                <span className="truncate">{keyword}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width Traffic Panel - Enhanced with graph image */}
      <div className="bg-gradient-to-br from-blue-900/40 to-blue-700/30 border border-blue-600/30 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm text-blue-200 font-medium">Traffic</h3>
          <div className="flex items-center text-xs text-blue-300 bg-blue-800/40 px-2 py-1 rounded">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
            Last 30 days
          </div>
        </div>
        <div className="flex items-center text-3xl font-bold text-white mb-2">
          59.8K <span className="text-sm ml-2 text-green-400 bg-green-900/30 px-2 py-1 rounded">+10.7%</span>
        </div>
        <div className="h-48 mt-4 bg-blue-900/20 rounded-lg overflow-hidden">
          {/* Replace with your actual traffic graph image */}
          <img 
            src={trafficGraph} 
            alt="Traffic Graph" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't load
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = '<div class="w-full h-full bg-gradient-to-r from-blue-600/30 to-blue-400/20 flex items-center justify-center text-blue-200">Traffic Graph</div>';
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
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
      </div>
    </div>
  );
};

export default Dashboard;