import { UserPlus } from "lucide-react";

const CallerIDsSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Caller IDs</h2>
      
      <p className="text-muted-foreground italic">No caller IDs found</p>
      
      <button className="flex items-center gap-2 text-primary hover:underline">
        <UserPlus className="w-4 h-4" />
        Add a new caller ID
      </button>
    </div>
  );
};

export default CallerIDsSection;
