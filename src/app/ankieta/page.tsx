"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CarIcon, FileTextIcon, CreditCardIcon, CheckCircleIcon, ShieldIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function AnkietaPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      title: "Dane pojazdu",
      description: "Wprowadź informacje o pojeździe",
      icon: <CarIcon className="h-5 w-5" />,
    },
    {
      title: "Wariant",
      description: "Wybierz rodzaj ubezpieczenia",
      icon: <FileTextIcon className="h-5 w-5" />,
    },
    {
      title: "Kalkulacja",
      description: "Obliczenie składki",
      icon: <ShieldIcon className="h-5 w-5" />,
    },
    {
      title: "Płatność",
      description: "Wybór metody płatności",
      icon: <CreditCardIcon className="h-5 w-5" />,
    },
    {
      title: "Potwierdzenie",
      description: "Podsumowanie zamówienia",
      icon: <CheckCircleIcon className="h-5 w-5" />,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <Card className="p-6">
        <div className="relative">
          {/* Stepper */}
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-48">
                {/* Linia łącząca */}
                {index < steps.length - 1 && (
                  <div 
                    className={cn(
                      "absolute w-full h-[2px] top-5 -z-10",
                      index < currentStep 
                        ? "bg-primary" 
                        : "bg-muted",
                      "left-[calc(50%+2rem)]"
                    )}
                    style={{
                      width: "calc(100% / 5)",
                      left: `calc(${index * (100 / 5)}% + 2rem)`,
                    }}
                  />
                )}
                
                {/* Krok */}
                <div className="mb-4 relative">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                      index === currentStep && "border-2 border-primary bg-background",
                      index < currentStep && "bg-primary text-primary-foreground",
                      index > currentStep && "border-2 border-muted bg-background"
                    )}
                  >
                    {step.icon}
                  </div>
                </div>
                
                {/* Tytuł i opis */}
                <div className="text-center">
                  <p className={cn(
                    "font-medium",
                    index === currentStep && "text-primary",
                    index !== currentStep && "text-muted-foreground"
                  )}>
                    {step.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Przyciski nawigacji */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
          >
            Wstecz
          </Button>
          <Button
            onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={currentStep === steps.length - 1}
          >
            Dalej
          </Button>
        </div>
      </Card>
    </div>
  );
}
