import { FileText, Hash, DollarSign, ShieldAlert, Clock, AlertTriangle } from "lucide-react";
import type { ActionItem } from "@/data/mockShipment";

const iconMap = {
  "file-text": FileText,
  hash: Hash,
  "dollar-sign": DollarSign,
  "shield-alert": ShieldAlert,
  clock: Clock,
};

const priorityConfig = {
  high: {
    border: "border-destructive/30",
    bg: "bg-destructive/5",
    badge: "bg-destructive/10 text-destructive",
    label: "Urgent",
  },
  medium: {
    border: "border-accent/30",
    bg: "bg-accent/5",
    badge: "bg-accent/10 text-accent-foreground",
    label: "Required",
  },
  low: {
    border: "border-border",
    bg: "bg-card",
    badge: "bg-muted text-muted-foreground",
    label: "Optional",
  },
};

const ActionsPanel = ({ actions }: { actions: ActionItem[] }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-semibold font-display text-foreground">What's Needed</h3>
      </div>
      {actions.map((action) => {
        const Icon = iconMap[action.icon];
        const pConfig = priorityConfig[action.priority];
        return (
          <div
            key={action.id}
            className={`p-4 rounded-lg border ${pConfig.border} ${pConfig.bg} flex gap-4 items-start`}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-sm text-foreground">{action.title}</h4>
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${pConfig.badge}`}>
                  {pConfig.label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{action.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActionsPanel;
