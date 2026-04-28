import { useState } from "react";
import { Search, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Reusable Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

// Feature Icons
import icon1 from "@/assets/1/1.webp";
import icon2 from "@/assets/1/2.webp";
import icon3 from "@/assets/1/3.webp";
import icon4 from "@/assets/1/4.webp";
import icon5 from "@/assets/1/5.webp";
import icon6 from "@/assets/1/6.webp";
import icon7 from "@/assets/1/7.webp";
import icon8 from "@/assets/1/8.webp";

const Landing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Accept a path parameter, default to "/login"
  const handleRedirect = (path = "/login") => {
    setLoading(true);

    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Hero />

      {/* Main Content Area */}
      <main className="flex-grow">

        {/* Mobile CTA */}
        <section className="bg-white border-b border-border md:hidden">
          <div className="px-4 py-8 text-center flex flex-col items-center justify-center">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">
              Track items held by customs
            </h2>
            <p className="text-sm text-gray-600 mb-5">
            Stay informed with reliable tracking for goods detained, inspected, or seized. Designed to provide transparency and clarity at every stage
            </p>
            <Button
              size="lg"
              className="w-full bg-[#004B87] hover:bg-[#003865] text-white py-6 shadow-md"
              onClick={() => handleRedirect("/track")} // 👈 Specifically routes to /track
            >
              <Search className="mr-2 h-4 w-4" />
              Track Shipment
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="bg-secondary/50">
          <div className="container max-w-6xl mx-auto px-4 py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { img: icon1, title: "Live Timeline" },
                { img: icon2, title: "Inspection Images" },
                { img: icon3, title: "Action Items" },
                { img: icon4, title: "Activity Log" },
                { img: icon5, title: "Document Library" },
                { img: icon6, title: "Port Information" },
                { img: icon7, title: "Pay Duties & Fees" },
                { img: icon8, title: "Contact Support" },
              ].map((f, i) => (
                <div
                  key={i}
                  onClick={() => handleRedirect()}
                  className="group flex flex-col bg-white border border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <div className="h-32 md:h-36 flex items-center justify-center overflow-hidden">
                    <img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="bg-[#004B87] p-3 flex-grow flex items-center justify-center min-h-[60px]">
                    <span className="text-white text-sm md:text-base font-medium text-center group-hover:underline underline-offset-4">
                      {f.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NewsSection />

        {/* Resource Cards */}
        <section className="bg-secondary/50 border-b border-border">
          <div className="container max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

              {/* Card 1 */}
              <div
                onClick={() => handleRedirect()}
                className="flex flex-row bg-white border border-gray-300 overflow-hidden shadow-sm cursor-pointer"
              >
                <div className="w-2/5 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3/5 p-6 flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-black mb-3">
                    Smart Wall Map
                  </h3>
                  <p className="text-sm text-gray-700 mb-6 flex-grow">
                    View the updated map and FAQs.
                  </p>
                  <span className="bg-[#004B87] text-white text-sm font-bold text-center py-2.5 px-4 mt-auto">
                    View Map
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => handleRedirect()}
                className="flex flex-row bg-white border border-gray-300 overflow-hidden shadow-sm cursor-pointer"
              >
                <div className="w-2/5 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3/5 p-6 flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-black mb-3">
                    Stats Dashboard
                  </h3>
                  <p className="text-sm text-gray-700 mb-6 flex-grow">
                    View CBP statistical data.
                  </p>
                  <span className="bg-[#004B87] text-white text-sm font-bold text-center py-2.5 px-4 mt-auto">
                    Access Data
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-14 max-w-2xl mx-auto">
            <CheckCircle2 className="h-10 w-10 text-primary-foreground/30 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-3">
              Ready to Track?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
              Enter your reference number and get instant access.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 py-6"
              onClick={() => handleRedirect()}
            >
              <Search className="mr-2 h-5 w-5" />
              Start Tracking
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* 🔥 Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
          
          {/* Logo / Title */}
          <h1 className="text-lg font-semibold text-[#004B87] mb-6 tracking-wide">
            Secure Access Portal
          </h1>

          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-gray-300 border-t-[#004B87] rounded-full animate-spin mb-4" />

          {/* Status Text */}
          <p className="text-sm text-gray-600">
            Connecting to secure system...
          </p>
        </div>
      )}
    </div>
  );
};

export default Landing;