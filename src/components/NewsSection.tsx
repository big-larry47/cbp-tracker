import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NewsSection = () => {
  const [news, setNews] = useState([
    {
      title: "CBP Announces Enhanced Biometric Screening at Major Ports",
      description: "U.S. Customs and Border Protection is expanding its facial comparison technology to further secure and streamline international travel at multiple entry points.",
      url: "#",
      // Changed thumbnail (Security/Technology theme)
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "New Trade Enforcement Task Force Intercepts Counterfeit Goods",
      description: "In a joint operation, CBP officers seized over $5 million worth of counterfeit electronics attempting to enter the domestic supply chain.",
      url: "#",
      // Changed thumbnail (Cargo/Shipping theme)
      image: "https://images.unsplash.com/photo-1565842858293-6ba3ba1fbcbb?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Border Patrol Agents Rescue Migrants in Remote Desert Region",
      description: "Search and rescue teams successfully located and provided emergency medical assistance to a group of individuals stranded in harsh terrain.",
      url: "#",
      // Changed thumbnail (Desert/Landscape theme)
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
    }
  ]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const API_KEY = "YOUR_GNEWS_API_KEY"; 
        
        if (API_KEY === "YOUR_GNEWS_API_KEY") return;

        const res = await fetch(`https://gnews.io/api/v4/search?q="Customs and Border Protection" OR "Border Patrol"&lang=en&max=3&apikey=${API_KEY}`);
        if (res.ok) {
          const data = await res.json();
          if (data.articles && data.articles.length > 0) {
            setNews(data.articles.map(article => ({
              title: article.title,
              description: article.description,
              url: article.url,
              // Updated fallback image
              image: article.image || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
            })));
          }
        }
      } catch (error) {
        console.error("Failed to fetch news", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-white border-y border-border">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            News & Updates
          </h2>
        </div>
        
        <div className="flex flex-col gap-4 md:gap-6 max-w-4xl mx-auto">
          {news.map((item, idx) => (
            <a 
              key={idx} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-row bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-28 sm:w-40 md:w-2/5 lg:w-1/3 shrink-0 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-4 md:p-8 flex flex-col flex-grow justify-center min-h-[120px] md:min-h-[220px]">
                {/* Date span completely removed from here */}
                <h3 className="text-sm sm:text-lg md:text-xl font-display font-bold text-foreground mb-1 md:mb-3 line-clamp-2 md:line-clamp-3 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground line-clamp-2 md:line-clamp-3 mb-2 md:mb-6">
                  {item.description}
                </p>
                <span className="text-xs md:text-sm font-medium text-primary flex items-center mt-auto md:mt-0 pt-1 md:pt-0">
                  Read Article <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;