import React, { useState } from "react";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const handleBillingToggle = (period) => {
    setBillingPeriod(period);
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

  return (
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
  );
};

export default Pricing;