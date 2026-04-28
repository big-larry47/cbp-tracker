import { MapPin, Navigation, User } from "lucide-react";
import type { ShipmentData } from "@/data/mockShipment";

const ShipmentHeader = ({ shipment }: { shipment: ShipmentData }) => {
  return (
    <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-primary-foreground/60 text-sm font-medium uppercase tracking-wider mb-1">
            Entry Number
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            {shipment.entryNumber}
          </h2>
          
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-primary-foreground/15">
        
        {/* Item 1 */}
      

        {/* Item 2 */}
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-primary-foreground/50 mt-0.5 shrink-0" />
          <div className="flex flex-col">
            <p className="text-[11px] uppercase tracking-wider text-primary-foreground/50">
              Destination
            </p>
            <p className="text-sm font-medium leading-snug mt-0.5">{shipment.destination}</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start gap-2">
          <Navigation className="h-4 w-4 text-primary-foreground/50 mt-0.5 shrink-0" />
          <div className="flex flex-col">
            <p className="text-[11px] uppercase tracking-wider text-primary-foreground/50">
              Current Location
            </p>
            <p className="text-sm font-medium leading-snug mt-0.5">{shipment.currentLocation}</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-start gap-2">
          <User className="h-4 w-4 text-primary-foreground/50 mt-0.5 shrink-0" />
          <div className="flex flex-col">
            <p className="text-[11px] uppercase tracking-wider text-primary-foreground/50">
              Beneficiary
            </p>
            <p className="text-sm font-medium leading-snug mt-0.5">{shipment.beneficiary}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ShipmentHeader;