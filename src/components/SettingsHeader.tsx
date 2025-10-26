import { Button } from "@/components/ui/button";
import { Gift, Phone, BookUser, CreditCard, ShoppingCart, ChevronDown, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SettingsHeader = () => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">ya</span>
              </div>
              <span className="text-xl font-semibold">Yadaphone</span>
            </div>
            
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Gift className="w-4 h-4 mr-2" />
              Earn Free Credits
            </Button>
          </div>

          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-foreground">
              <Phone className="w-4 h-4 mr-2" />
              Phone
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground">
              <BookUser className="w-4 h-4 mr-2" />
              Contacts
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-foreground ${location.pathname === '/billing' ? 'text-primary' : ''}`}
              onClick={() => navigate('/billing')}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Buy Credits
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy Number
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground">
              More
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            
            <div className="ml-4 flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="w-8 h-8"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SettingsHeader;
