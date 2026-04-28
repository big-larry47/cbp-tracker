import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import GovBanner from "@/components/GovBanner";

// Images
import tsaBanner from "@/assets/tsaprecheck-banner.png"; 
import cbpSeal from "@/assets/seal.png";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Always scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Clear any previous errors
    
    // Simulate API call/Authentication
    setTimeout(() => {
      setIsLoading(false);
      // Always show an error regardless of what was entered
      setError("Invalid credentials. Please verify your Email Address and Password.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col font-sans">
      
      {/* Gov Banner */}
      <GovBanner theme="dark" /> 

      {/* Header */}
      <header className="bg-[#1d3764] py-3 px-4 shadow-sm relative z-10">
        <div className="container max-w-6xl mx-auto px-0 flex items-center justify-between">
          <img 
            src={tsaBanner} 
            alt="TSA PreCheck Banner" 
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/")} 
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Login Form */}
      <main className="flex-grow flex md:items-center items-start justify-center p-4 md:p-8 md:pt-8 pt-12">
        <Card className="w-full max-w-md rounded-xl overflow-hidden shadow-none border-none bg-transparent md:shadow-2xl md:border md:border-gray-200 md:bg-white">
          
          <CardHeader className="space-y-1 text-center md:bg-[#f9fafb] bg-transparent md:border-b md:border-gray-100 md:pb-8 md:pt-10 p-0 md:px-6">
            <img 
              src={cbpSeal} 
              alt="CBP Official Seal" 
              className="mx-auto h-32 md:h-28 w-auto object-contain md:mb-5 mb-6"
            />
            <CardTitle className="hidden md:block text-2xl font-serif font-bold text-[#1b1b1b]">
              Authorized Access
            </CardTitle>
            <CardDescription className="hidden md:block text-gray-600 max-w-xs mx-auto text-sm">
              Enter credentials to access the secure Shipment Tracker portal.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="md:pt-8 md:pb-6 pt-6 px-0 md:px-8">
            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* Error Message Display */}
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 rounded-md flex items-start gap-2 animate-in fade-in slide-in-from-top-1">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div className="space-y-1 md:space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                  Email Address or User ID
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  required 
                  className={`bg-white h-11 rounded-none focus-visible:ring-[#004B87] ${error ? 'border-destructive' : 'border-gray-300'}`}
                />
              </div>

              <div className="space-y-1 md:space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-900">
                    Password
                  </Label>
                  <a href="#" className="text-xs text-[#004B87] hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className={`bg-white h-11 rounded-none focus-visible:ring-[#004B87] ${error ? 'border-destructive' : 'border-gray-300'}`}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#004B87] hover:bg-[#003865] text-white py-6 mt-4 text-base font-bold rounded-none shadow-md transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Authenticating..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col md:border-t md:border-gray-100 md:bg-[#f9fafb] md:pt-6 md:pb-6 md:px-8 p-0 pt-6">
            <p className="text-[11px] md:text-center text-left text-gray-600 leading-relaxed uppercase tracking-wider font-medium">
              WARNING: This is a U.S. Federal Government system. Unauthorized access is prohibited and subject to criminal and civil penalties.
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Login;