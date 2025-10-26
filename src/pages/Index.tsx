import SettingsHeader from "@/components/SettingsHeader";
import AccountInformation from "@/components/AccountInformation";
import BalanceCard from "@/components/BalanceCard";
import PromoCodesSection from "@/components/PromoCodesSection";
import PhoneNumbersSection from "@/components/PhoneNumbersSection";
import CallerIDsSection from "@/components/CallerIDsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SettingsHeader />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <AccountInformation />
          <BalanceCard />
          <PromoCodesSection />
          <PhoneNumbersSection />
          <CallerIDsSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
