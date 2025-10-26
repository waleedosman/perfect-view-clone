import { Phone, Plus } from "lucide-react";

const PhoneNumbersSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Phone Numbers</h2>
      
      <p className="text-muted-foreground italic">No phone numbers found</p>
      
      <button className="flex items-center gap-2 text-primary hover:underline">
        <Phone className="w-4 h-4" />
        Buy a new phone number
      </button>
    </div>
  );
};

export default PhoneNumbersSection;
