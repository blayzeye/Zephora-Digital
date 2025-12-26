'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Section } from './section';
import { useState, useEffect } from 'react';

const currencyMap: { [key: string]: string } = {
  'en-US': '$',
  'en-GB': '£',
  'en-IN': '₹',
  'de-DE': '€',
  'ja-JP': '¥',
};

const DynamicPrice = ({ price, isMonthly }: { price: number, isMonthly: boolean }) => {
  const [currencySymbol, setCurrencySymbol] = useState('$');

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.language) {
      const userLocale = navigator.language;
      for (const locale in currencyMap) {
        if (userLocale.startsWith(locale.split('-')[0])) {
          setCurrencySymbol(currencyMap[locale]);
          return;
        }
      }
    }
  }, []);

  return (
    <span className="flex items-baseline">
      <span className="text-3xl font-bold">{currencySymbol}</span>
      <span className="text-5xl font-extrabold tracking-tighter">{price}</span>
      {isMonthly && <span className="ml-1 text-xl font-medium text-foreground/50">/mo</span>}
    </span>
  );
};


const pricingTiers = [
    {
        name: "Starter",
        price: 999,
        description: "For new businesses and individuals getting started.",
        features: ["5-Page Website", "Basic SEO", "Mobile Responsive", "Contact Form"],
        isPopular: false,
        isMonthly: false,
    },
    {
        name: "Business",
        price: 249,
        description: "For growing businesses that need more features and support.",
        features: ["15-Page Website", "Advanced SEO", "CMS Integration", "E-commerce Ready", "Hosting & Domain", "Priority Support"],
        isPopular: true,
        isMonthly: true,
    },
    {
        name: "Premium",
        price: 4999,
        description: "For established businesses requiring a full-scale solution.",
        features: ["Unlimited Pages", "Custom App Development", "Dedicated Account Manager", "24/7 Support", "API Integrations"],
        isPopular: false,
        isMonthly: false,
    }
];

const PricingSection = () => {
  return (
    <Section id="pricing">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Flexible Pricing for Any Scale</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/70 mt-4">
          Choose a plan that fits your needs. All plans come with our commitment to quality and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} className={`glassmorphism flex flex-col shine-effect transition-all duration-300 ease-in-out ${tier.isPopular ? 'border-primary ring-2 ring-primary shadow-lg shadow-primary/20 -translate-y-4' : 'hover:border-accent'}`}>
            {tier.isPopular && <div className="absolute top-0 right-4 -mt-3 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded-full">POPULAR</div>}
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl">{tier.name}</CardTitle>
              <CardDescription className="text-foreground/70">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div className="text-center my-8">
                <DynamicPrice price={tier.price} isMonthly={tier.isMonthly} />
              </div>
              <ul className="space-y-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${tier.isPopular ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground hover:bg-accent/90'}`}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default PricingSection;
