import { CreditCard, Lock, LogOut } from "lucide-react";

const AccountInformation = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Account Information</h2>
      
      <div className="space-y-3">
        <div className="flex gap-4">
          <span className="text-muted-foreground w-32">Email</span>
          <span className="text-foreground">waleedosman735@gmail.com</span>
        </div>
        
        <div className="flex gap-4">
          <span className="text-muted-foreground w-32">Member since</span>
          <span className="text-foreground">10/26/2025</span>
        </div>
        
        <div className="space-y-2 mt-4">
          <button className="flex items-center gap-2 text-primary hover:underline">
            <CreditCard className="w-4 h-4" />
            View billing portal
          </button>
          
          <button className="flex items-center gap-2 text-primary hover:underline">
            <Lock className="w-4 h-4" />
            Change password
          </button>
          
          <button className="flex items-center gap-2 text-destructive hover:underline">
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
