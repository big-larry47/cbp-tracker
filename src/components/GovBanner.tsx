import { useState } from "react";
import { ChevronDown, Lock, X } from "lucide-react";

interface GovBannerProps {
  theme?: "light" | "dark";
}

const GovBanner = ({ theme = "light" }: GovBannerProps) => {
  const [isGovBannerOpen, setIsGovBannerOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <div className={`w-full z-30 relative ${isDark ? "bg-[#1d3764]" : "bg-[#f0f0f0]"}`}>
      {/* Official Government Banner - Top Bar */}
      <div className={`py-1.5 border-b ${isDark ? "border-[#152a4e]" : "border-gray-200"}`}>
        <div className={`container max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-start gap-x-2 gap-y-1 text-[11px] sm:text-sm ${isDark ? "text-gray-200" : "text-[#1b1b1b]"}`}>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
              alt="U.S. flag" 
              className="w-4 h-3 sm:w-5 sm:h-auto object-cover shrink-0"
            />
            <span>An official website of the United States government</span>
          </div>
          
          <button 
            onClick={() => setIsGovBannerOpen(!isGovBannerOpen)}
            className={`flex items-center hover:underline font-medium ${isDark ? "text-white" : "text-[#005ea2]"}`}
            aria-expanded={isGovBannerOpen}
          >
            Here's how you know
            <ChevronDown 
              className={`h-3 w-3 sm:h-4 sm:w-4 ml-0.5 transition-transform duration-200 ${isGovBannerOpen ? "rotate-180" : ""}`} 
              strokeWidth={2.5} 
            />
          </button>
        </div>
      </div>

      {/* Official Government Banner - Expanded Content */}
      {isGovBannerOpen && (
        <div className={`border-b py-6 relative ${isDark ? "border-[#152a4e] bg-[#1d3764]" : "border-gray-200 bg-[#f0f0f0]"}`}>
          
          {/* Mobile Close Button (X) */}
          <button 
            onClick={() => setIsGovBannerOpen(false)}
            className={`absolute top-2 right-2 p-2 md:hidden ${isDark ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
            aria-label="Close government banner"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pt-2 md:pt-0">
              
              {/* Column 1:  explanation */}
              <div className="flex items-start gap-3 sm:gap-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
                  alt="U.S. flag" 
                  className="w-8 h-auto object-cover shrink-0 mt-1"
                />
                <div className={`text-[13px] sm:text-sm ${isDark ? "text-white" : "text-[#1b1b1b]"}`}>
                  <p className="font-bold mb-1">Official websites use .vercel.app</p>
                  <p>
                    A <strong>.vercel.app</strong> website belongs to an official government organization in the United States.
                  </p>
                </div>
              </div>

              {/* Column 2: HTTPS explanation */}
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Lock circle icon */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 shrink-0 mt-1 ${isDark ? "border-white bg-[#152a4e]" : "border-[#1a4480] bg-[#e7f4e4]"}`}>
                  <Lock className={`w-5 h-5 ${isDark ? "text-white" : "text-[#1a4480]"}`} strokeWidth={2.5} />
                </div>
                <div className={`text-[13px] sm:text-sm ${isDark ? "text-white" : "text-[#1b1b1b]"}`}>
                  <p className="font-bold mb-1">Secure .vercel.app websites use HTTPS</p>
                  <p>
                    A <strong>lock</strong> ( <Lock className={`inline w-3 h-3 mb-0.5 ${isDark ? "text-white" : "text-black"}`} strokeWidth={3} /> ) or <strong>https://</strong> means you've safely connected to the .vercel.app website. Share sensitive information only on official, secure websites.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GovBanner;