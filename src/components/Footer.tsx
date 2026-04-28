import { 
    Facebook,
    Twitter,
    Youtube,
    Instagram,
    Linkedin,
    Mail,
    MoreHorizontal
  } from "lucide-react";
  
  // Assets
  import cbpLogo from "@/assets/cbp.png";
  import footerBadge from "@/assets/footer.svg";
  
  const Footer = () => {
    return (
      <footer className="w-full">
        {/* Top Light Gray Bar */}
        <div className="bg-[#e4e4e4] py-4">
          <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <img 
                src={cbpLogo} 
                alt="U.S. Customs and Border Protection Logo" 
                width={280} 
                height={88} 
                className="object-contain"
              />
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-2">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "X / Twitter" }, 
                { icon: Youtube, label: "YouTube" },
                { icon: MoreHorizontal, label: "Flickr" }, 
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Email" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index} 
                    href="#" 
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#d4d4d4] flex items-center justify-center hover:bg-[#c4c4c4] transition-colors"
                  >
                    <Icon 
                      className="h-5 w-5 text-black" 
                      fill={Icon === Twitter || Icon === MoreHorizontal || Icon === Mail ? "none" : "currentColor"} 
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
  
        {/* Main Dark Blue Section */}
        <div className="bg-[#004B87] py-12">
          <div className="container max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-12">
            
            {/* Left Content Area (Logo, Text, Links) */}
            <div className="flex-1">
              
              {/* DHS Seal & Official Text */}
              <div className="flex items-start gap-4 mb-10">
                <div className="w-12 h-12 bg-white rounded-full p-1 flex items-center justify-center shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Seal_of_the_United_States_Department_of_Homeland_Security.svg/1200px-Seal_of_the_United_States_Department_of_Homeland_Security.svg.png" alt="DHS Seal" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">CBP.vercel.app</h3>
                  <a href="#" className="text-white hover:underline text-sm font-semibold">
                    An official website of the U.S. Department of Homeland Security
                  </a>
                </div>
              </div>
  
              {/* Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
                <div className="flex flex-col gap-6">
                  <a href="#" className="text-white text-sm hover:underline">About CBP</a>
                  <a href="#" className="text-white text-sm hover:underline">Section 508 Accessibility</a>
                  <a href="#" className="text-white text-sm hover:underline">Accountability</a>
                  <a href="#" className="text-white text-sm hover:underline">DHS Components</a>
                  <a href="#" className="text-white text-sm hover:underline">Forms</a>
                </div>
                
                <div className="flex flex-col gap-6">
                  <a href="#" className="text-white text-sm hover:underline">Freedom of Information Act (FOIA)</a>
                  <a href="#" className="text-white text-sm hover:underline">Inspector General</a>
                  <a href="#" className="text-white text-sm hover:underline">No FEAR Act</a>
                  <a href="#" className="text-white text-sm hover:underline">Vulnerability Disclosure Program</a>
                  <a href="#" className="text-white text-sm hover:underline">Privacy</a>
                </div>
  
                <div className="flex flex-col gap-6">
                  <a href="#" className="text-white text-sm hover:underline">Site Policies</a>
                  <a href="#" className="text-white text-sm hover:underline">The White House</a>
                  <a href="#" className="text-white text-sm hover:underline">USA.vercel.app</a>
                </div>
              </div>
  
            </div>
  
            {/* Right Content Area (NTAS Badge) */}
            <div className="lg:w-auto shrink-0 flex justify-center lg:justify-end">
              <img 
                src={footerBadge} 
                alt="National Terrorism Advisory System" 
                className="w-full max-w-[160px] object-contain"
              />
            </div>
  
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;