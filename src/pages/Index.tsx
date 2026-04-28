import { useState } from "react";
import { Package, PauseCircle } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import ShipmentHeader from "@/components/ShipmentHeader";
import InspectionGallery from "@/components/InspectionGallery";
import ClearanceTimeline from "@/components/ClearanceTimeline";
import ActivityLog from "@/components/ActivityLog";
import Header from "@/components/Header";
import SupportAssistant from "@/components/SupportAssistant";
import { mockShipment } from "@/data/mockShipment";
import { useToast } from "@/hooks/use-toast"; // 👈 Imported toast hook for error messages

const Index = () => {
  const [shipment, setShipment] = useState<typeof mockShipment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast(); // 👈 Initialize toast

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    // Clean up the search query (remove extra spaces, ignore case)
    const sanitizedQuery = query.trim().toUpperCase();
    const validEntryNumber = mockShipment.entryNumber.toUpperCase();
    const validReferenceNumber = mockShipment.referenceNumber.toUpperCase();

    // Simulate API call
    setTimeout(() => {
      // Validate: Does the input match our mock data?
      if (sanitizedQuery === validEntryNumber || sanitizedQuery === validReferenceNumber) {
        setShipment(mockShipment);
      } else {
        // If it doesn't match, ensure shipment is null and show an error
        setShipment(null);
        toast({
          title: "Shipment Not Found",
          description: "Please verify your Entry Number or Reference Number and try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Reusable Header Component */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-grow">
        {/* Search section */}
        <section className="bg-secondary/50 border-b border-border">
          <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
            {!shipment && (
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  Track Your Customs Clearance
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Enter your reference number to view real-time clearance status and required actions.
                </p>
              </div>
            )}
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          </div>
        </section>

        {/* Results */}
        {shipment && (
          <main className="container max-w-5xl mx-auto px-4 py-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ShipmentHeader shipment={shipment} />

            {/* Inspection Images */}
            <section>
              <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-muted-foreground" />
                Inspection Images
              </h3>
              <InspectionGallery />
            </section>

            {/* Two column layout */}
            <div className="grid md:grid-cols-5 gap-8">
              {/* Timeline */}
              <div className="md:col-span-3">
                <div className="bg-card rounded-xl border border-border p-6">
                  {/* Title and Paused Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      Clearance Progress
                    </h3>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-warning/10 border border-warning/20 text-warning text-xs font-bold uppercase tracking-wider">
                      <PauseCircle className="h-3.5 w-3.5" />
                      Paused
                    </div>
                  </div>
                  
                  <ClearanceTimeline stages={shipment.timeline} />
                </div>
              </div>

              {/* Actions + Activity + Support Assistant */}
              <div className="md:col-span-2 space-y-6">
                {/* Hidden on mobile, shown on medium screens and up */}
                <div className="hidden md:block bg-card rounded-xl border border-border p-6">
                  <ActivityLog entries={shipment.activity} />
                </div>
                
                {/* Reusable Support System Component placed right below Activity Log */}
                <div className="flex justify-center md:justify-start">
                  <SupportAssistant />
                </div>
              </div>
            </div>

          </main>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="container max-w-5xl mx-auto px-4 py-6 text-center">
          <p className="text-xs text-muted-foreground">
            This is a tracking interface for information & official Customs & Border Protection inquiries.
         
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;