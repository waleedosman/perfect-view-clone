import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CreditCard, Phone, Lock, DollarSign, Globe, CheckCircle2 } from "lucide-react";
import SettingsHeader from "@/components/SettingsHeader";

const Billing = () => {
  const [selectedAmount, setSelectedAmount] = useState(20);
  const [customAmount, setCustomAmount] = useState("");
  const [autoTopUp, setAutoTopUp] = useState(false);
  const [taxInvoice, setTaxInvoice] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const presetAmounts = [
    { value: 5, label: "$5" },
    { value: 10, label: "$10" },
    { value: 20, label: "$20", badge: "Most Popular", badgeColor: "bg-primary" },
    { value: 50, label: "$50", badge: "5% free", badgeColor: "bg-blue-500" },
    { value: 100, label: "$100", badge: "10% free", badgeColor: "bg-amber-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SettingsHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Credit Selection */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border p-8 space-y-6">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-primary mt-1" />
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-foreground mb-3">Select Your Credit Amount</h1>
                  
                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-foreground mb-2">Need Yadaphone for the team?</p>
                    <Button variant="default" size="sm">See enterprise plans</Button>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    Your credits are used to make international calls at competitive rates.{" "}
                    <a href="#" className="text-primary hover:underline">View our detailed rate calculator →</a>
                  </p>

                  {/* Preset Amounts */}
                  <div className="space-y-4 mb-6">
                    <label className="text-sm font-medium text-foreground">Choose Amount (USD)*</label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount.value}
                          onClick={() => {
                            setSelectedAmount(amount.value);
                            setCustomAmount("");
                          }}
                          className={`relative border-2 rounded-lg p-4 text-center transition-all ${
                            selectedAmount === amount.value && !customAmount
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {amount.badge && (
                            <Badge className={`absolute -top-2 left-1/2 -translate-x-1/2 text-xs ${amount.badgeColor} text-white`}>
                              {amount.badge}
                            </Badge>
                          )}
                          <div className="text-xl font-bold text-foreground">{amount.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="space-y-2 mb-6">
                    <label className="text-sm text-foreground">Or enter custom amount (minimum $5)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="number"
                        min="5"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        className="pl-9"
                        placeholder="20"
                      />
                    </div>
                  </div>

                  {/* Auto Top-up */}
                  <div className="flex items-start gap-3 mb-4">
                    <Checkbox 
                      id="auto-topup"
                      checked={autoTopUp}
                      onCheckedChange={(checked) => setAutoTopUp(checked as boolean)}
                      className="mt-1"
                    />
                    <label htmlFor="auto-topup" className="cursor-pointer">
                      <div className="font-medium text-foreground">Enable Auto Top-up</div>
                      <div className="text-sm text-primary">Avoid interrupting an important call</div>
                    </label>
                  </div>

                  {/* Tax Invoice */}
                  <div className="flex items-start gap-3 mb-4">
                    <Checkbox 
                      id="tax-invoice"
                      checked={taxInvoice}
                      onCheckedChange={(checked) => setTaxInvoice(checked as boolean)}
                      className="mt-1"
                    />
                    <label htmlFor="tax-invoice" className="cursor-pointer text-foreground">
                      Issue tax-deductible invoice (address required)
                    </label>
                  </div>

                  {/* Promo Code */}
                  <div className="space-y-2 mb-6">
                    <label className="text-sm text-foreground">Promo Code (Optional)</label>
                    <Input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                    />
                  </div>

                  {/* Call Time Estimate */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Phone className="w-4 h-4" />
                    <span>Up to <strong className="text-foreground">1,000 minutes</strong> of international calling time</span>
                  </div>

                  {/* Checkout Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-semibold">
                    <Lock className="w-4 h-4 mr-2" />
                    Secure Checkout
                  </Button>

                  {/* Guarantee */}
                  <div className="flex items-center justify-center gap-2 text-sm text-primary mt-4">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>100% Money Back Guarantee. No Questions Asked.</span>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    *VAT may be added depending on your country and payment method
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-card rounded-lg border border-border p-8 mt-8">
              <div className="flex items-start gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-primary mt-1" />
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">How do credits work?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Credits are added to your account balance immediately and automatically used when you make calls.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Can I get a refund?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer full no-questions-asked refunds and make up credits for the calls that don't work as expected. 
                    Please contact our support team if you experience any issues. We aim to provide the best service possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">How are call rates calculated?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Rates vary by country. Check our rate calculator for specific pricing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Is there a minimum purchase?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, the minimum purchase amount is $5 to cover processing fees.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Sidebar - Why Yadaphone */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Why <span className="italic">Yadaphone</span></h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">International calls to any country without restrictions.</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Our service works in all countries, no restrictions.</p>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Privacy first. We don't store your payment information.</p>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Credit based, no subscription. Pay only for what you use.</p>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">No phone number required. Start calling immediately.</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm italic text-muted-foreground mb-2">
                  "After Skype announced they were shutting down, I've been looking for an alternative for ages. 
                  I'm so glad I found Yadaphone!"
                </p>
                <p className="text-xs text-muted-foreground">- Michael T., Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;