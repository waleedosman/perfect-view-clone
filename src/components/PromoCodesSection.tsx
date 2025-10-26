import { Gift } from "lucide-react";

const PromoCodesSection = () => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-start gap-3 mb-4">
        <Gift className="w-5 h-5 text-muted-foreground mt-1" />
        <h3 className="text-xl font-bold text-foreground">Promo Codes</h3>
      </div>
      
      <p className="text-foreground mb-2">
        You don't have any active promo codes at the moment
      </p>
      
      <p className="text-muted-foreground text-sm">
        Complete feedback surveys to earn discount codes!
      </p>
    </div>
  );
};

export default PromoCodesSection;
