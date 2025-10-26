import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Plus } from "lucide-react";
import { useState } from "react";

const BalanceCard = () => {
  const [autoTopUp, setAutoTopUp] = useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Balance</h2>
      
      <div className="bg-card rounded-lg p-6 border border-border space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Balance</p>
              <p className="text-3xl font-bold text-foreground">$0.00</p>
            </div>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add Credits
          </Button>
        </div>
        
        <div className="bg-secondary/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Checkbox 
              id="auto-topup" 
              checked={autoTopUp}
              onCheckedChange={(checked) => setAutoTopUp(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="auto-topup" className="cursor-pointer">
              <div className="font-medium text-foreground">Auto top-up when low</div>
              <div className="text-sm text-primary">never interrupt an important call</div>
            </label>
          </div>
        </div>
        
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Save
        </Button>
      </div>
    </div>
  );
};

export default BalanceCard;
