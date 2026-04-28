import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
  }
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Changes slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative overflow-hidden bg-zinc-900 min-h-[250px] md:min-h-[350px] flex items-center">
      {/* Background Images - Only these slide/fade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={slide.image}
            alt="Hero Background"
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      
      {/* Hero Content Wrapper - Static Content */}
      <div className="relative z-10 w-full pb-12">
        <div className="container max-w-6xl mx-auto px-4 py-8 md:py-12 flex justify-start">
          
          {/* Content Container: Hidden on mobile (hidden md:block), visible as a blue box on desktop */}
          <div className="hidden md:block bg-[#004B87] p-8 max-w-md lg:max-w-lg w-full shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-sm px-3 py-1 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-[10px] uppercase tracking-wider font-medium text-white/90">System Online</span>
            </div>
            
            <div className="min-h-[140px]">
              <h1 className="text-3xl font-display font-bold text-white leading-tight mb-3 animate-in fade-in slide-in-from-left-4 duration-700 text-left">
              Secure Monitoring of Shipments Under Customs Review

              </h1>
              <p className="text-base text-white/80 mb-6 animate-in fade-in slide-in-from-left-4 duration-700 delay-150 text-left">
              Stay informed with reliable tracking for goods detained, inspected, or seized. Designed to provide transparency and clarity at every stage.
              </p>
            </div>

            <Button
              size="default"
              variant="default"
              className="text-sm px-6 py-5 shadow-xl bg-white text-[#004B87] hover:bg-white/90 animate-in fade-in slide-in-from-left-4 duration-700 delay-300 w-auto"
              onClick={() => navigate("/track")}
            >
              <Search className="mr-2 h-4 w-4" />
              Track Your Shipment
            </Button>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;