import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Phone, Lock, DollarSign, Globe, CheckCircle2, CreditCard } from "lucide-react";

const Billing = () => {
  const [selectedAmount, setSelectedAmount] = useState(20);
  const [customAmount, setCustomAmount] = useState("20");
  const [autoTopUp, setAutoTopUp] = useState(false);
  const [taxInvoice, setTaxInvoice] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const presetAmounts = [
    { value: 5, label: "$5" },
    { value: 10, label: "$10" },
    { value: 20, label: "$20", badge: "Most Popular", badgeColor: "bg-emerald-500" },
    { value: 50, label: "$50", badge: "5% free", badgeColor: "bg-blue-500" },
    { value: 100, label: "$100", badge: "10% free", badgeColor: "bg-amber-500" }
  ];

  const faqItems = [
    {
      question: "How do credits work?",
      answer: "Credits are added to your account balance immediately and automatically used when you make calls."
    },
    {
      question: "Can I get a refund?",
      answer: "We offer full no-questions-asked refunds and make up credits for the calls that don't work as expected. Please contact our support team if you experience any issues. We aim to provide the best service possible."
    },
    {
      question: "How are call rates calculated?",
      answer: "Rates vary by country. Check our rate calculator for specific pricing."
    },
    {
      question: "Is there a minimum purchase?",
      answer: "Yes, the minimum purchase amount is $5 to cover processing fees."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          {/* Main Content - Credit Selection */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <h1 className="text-2xl font-bold text-gray-900">Select Your Credit Amount</h1>
              </div>

              <div className="bg-emerald-50 rounded-lg p-4 mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-700">Need Yadaphone for the team?</p>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  See enterprise plans
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Your credits are used to make international calls at competitive rates.{" "}
                <a href="#" className="text-emerald-600 hover:underline">View our detailed rate calculator →</a>
              </p>

              {/* Preset Amounts */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-gray-900 block">Choose Amount (USD)*</label>
                <div className="grid grid-cols-5 gap-3">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount.value}
                      onClick={() => {
                        setSelectedAmount(amount.value);
                        setCustomAmount("");
                      }}
                      className={`relative border-2 rounded-lg py-3 text-center transition-all ${
                        selectedAmount === amount.value && !customAmount
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-200 hover:border-emerald-300 bg-white"
                      }`}
                    >
                      {amount.badge && (
                        <Badge className={`absolute -top-2 left-1/2 -translate-x-1/2 text-xs px-2 py-0.5 ${amount.badgeColor} text-white border-0`}>
                          {amount.badge}
                        </Badge>
                      )}
                      <div className="text-lg font-semibold text-gray-900">{amount.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="space-y-2 mb-6">
                <label className="text-sm text-gray-700 block">Or enter custom amount (minimum $5)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <Input
                    type="text"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    className="pl-7 h-11 border-gray-300"
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
                  className="mt-0.5 border-gray-300"
                />
                <label htmlFor="auto-topup" className="cursor-pointer flex-1">
                  <div className="text-sm text-gray-900">Enable Auto Top-up</div>
                  <div className="text-sm text-emerald-600">Avoid interrupting an important call</div>
                </label>
              </div>

              {/* Tax Invoice */}
              <div className="flex items-start gap-3 mb-6">
                <Checkbox 
                  id="tax-invoice"
                  checked={taxInvoice}
                  onCheckedChange={(checked) => setTaxInvoice(checked as boolean)}
                  className="mt-0.5 border-gray-300"
                />
                <label htmlFor="tax-invoice" className="cursor-pointer text-sm text-gray-900">
                  Issue tax-deductible invoice (address required)
                </label>
              </div>

              {/* Promo Code */}
              <div className="space-y-2 mb-6">
                <label className="text-sm text-gray-700 block">Promo Code (Optional)</label>
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="h-11 border-gray-300"
                />
              </div>

              {/* Call Time Estimate */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <Phone className="w-4 h-4" />
                <span>Up to <strong className="text-gray-900">1,000</strong> minutes of international calling time</span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-12 rounded-lg text-base font-semibold transition-colors flex items-center justify-center gap-2">
                Secure Checkout
              </button>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-2 text-sm text-emerald-600 mt-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% Money Back Guarantee. No Questions Asked.</span>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                *VAT may be added depending on your country and payment method
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-sm text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Why Yadaphone */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Why <span className="italic">Yadaphone</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">International calls to any country without restrictions.</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Our service works in all countries, no restrictions.</p>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Privacy first. We don't store your payment information.</p>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Credit based, no subscription. Pay only for what you use.</p>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">No phone number required. Start calling immediately.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm italic text-gray-600 mb-2">
                  "After Skype announced they were shutting down, I've been looking for an alternative for ages. I'm so glad I found Yadaphone!"
                </p>
                <p className="text-xs text-gray-500">- Michael T., Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;