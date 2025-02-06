"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  ListTodoIcon,
  CalculatorIcon,
  UserIcon,
  CarIcon,
  CreditCardIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function AnkietaPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [registrationDate, setRegistrationDate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [isOtherExpanded, setIsOtherExpanded] = useState(false);
  const [insuranceVariant, setInsuranceVariant] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [insurancePeriod, setInsurancePeriod] = useState("12");
  const [insuranceLimit, setInsuranceLimit] = useState("");
  const [paymentType, setPaymentType] = useState("");

  const mainVehicleTypes = [
    { value: "personal", label: "Osobowy (kat. M1)" },
    { value: "cargo", label: "Ciężarowy - LCV (DMC do 3500 kg) kat. N1" },
    { value: "motorcycle", label: "Motocykle i inne pojazdy (kat. L)" },
  ];

  const otherVehicleTypes = [
    { value: "heavy_truck", label: "Ciężarowy (DMC powyżej 3,5t - TIR)" },
    { value: "camper_light", label: "Samochód z częścią mieszkalną (kamper DMC do 3,5t)" },
    { value: "camping_trailer", label: "Przyczepa kempingowa" },
    { value: "trailer", label: "Przyczepa / Naczepa" },
    { value: "bus", label: "Autobus" },
    { value: "tractor", label: "Traktor Rolniczy" },
    { value: "camper_heavy", label: "Samochód z częścią mieszkalną (kamper DMC powyżej 3,5t)" },
    { value: "quad", label: "Quad (kat. L)" },
  ];

  const insurancePeriods = [
    { value: "12", label: "12" },
    { value: "24", label: "24" },
    { value: "36", label: "36" },
  ];

  const insuranceLimits = [
    { value: "10000", label: "10 000 zł" },
    { value: "20000", label: "20 000 zł" },
    { value: "30000", label: "30 000 zł" },
    { value: "40000", label: "40 000 zł" },
  ];

  const steps: Step[] = [
    {
      title: "Określenie wariantu",
      description: "1 min",
      icon: <ListTodoIcon className="h-5 w-5" />,
    },
    {
      title: "Poznaj cenę",
      description: "1 min",
      icon: <CalculatorIcon className="h-5 w-5" />,
    },
    {
      title: "Twoje dane",
      description: "1 min",
      icon: <UserIcon className="h-5 w-5" />,
    },
    {
      title: "Dane pojazdu",
      description: "1 min",
      icon: <CarIcon className="h-5 w-5" />,
    },
    {
      title: "Podsumowanie",
      description: "1 min",
      icon: <CreditCardIcon className="h-5 w-5" />,
    },
  ];

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Card className="p-6 mt-8">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">Określenie wariantu ubezpieczenia</h2>
              
              {/* Wariant ubezpieczenia */}
              <div className="space-y-3">
                <Label className="text-lg">Wariant ubezpieczenia</Label>
                <RadioGroup
                  value={insuranceVariant}
                  onValueChange={setInsuranceVariant}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="gap_max" 
                      id="gap_max"
                      className="w-5 h-5"
                    />
                    <Label 
                      htmlFor="gap_max"
                      className="text-base font-medium cursor-pointer"
                    >
                      DEFEND Gap Max (fakturowy)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="gap_d2c" 
                      id="gap_d2c"
                      className="w-5 h-5"
                    />
                    <Label 
                      htmlFor="gap_d2c"
                      className="text-base font-medium cursor-pointer"
                    >
                      DEFEND Gap D2C (casco)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Data rejestracji */}
              <div className="space-y-3">
                <Label htmlFor="registrationDate" className="text-lg">
                  Data pierwszej rejestracji pojazdu
                </Label>
                <Input
                  id="registrationDate"
                  type="date"
                  value={registrationDate}
                  onChange={(e) => setRegistrationDate(e.target.value)}
                  className="text-lg h-12"
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Dane pojazdu */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Dane pojazdu</h3>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label htmlFor="vehicleBrand" className="text-lg">
                      Marka pojazdu
                    </Label>
                    <Input
                      id="vehicleBrand"
                      type="text"
                      placeholder="Wprowadź markę pojazdu"
                      value={vehicleBrand}
                      onChange={(e) => setVehicleBrand(e.target.value)}
                      className="text-lg h-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="vehicleModel" className="text-lg">
                      Model pojazdu
                    </Label>
                    <Input
                      id="vehicleModel"
                      type="text"
                      placeholder="Wprowadź model pojazdu"
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      className="text-lg h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Rodzaj pojazdu */}
              <div className="space-y-3">
                <Label className="text-lg">Rodzaj pojazdu</Label>
                <RadioGroup
                  value={vehicleType}
                  onValueChange={(value) => {
                    setVehicleType(value);
                    if (!value.startsWith('other_')) {
                      setIsOtherExpanded(false);
                    }
                  }}
                  className="space-y-3"
                >
                  {/* Główne typy pojazdów */}
                  {mainVehicleTypes.map((type) => (
                    <div key={type.value} className="flex items-center space-x-3">
                      <RadioGroupItem 
                        value={type.value} 
                        id={type.value}
                        className="w-5 h-5"
                      />
                      <Label 
                        htmlFor={type.value}
                        className="text-base font-medium cursor-pointer"
                      >
                        {type.label}
                      </Label>
                    </div>
                  ))}

                  {/* Sekcja "Inne" z rozwijaną listą */}
                  <div className="space-y-3">
                    <div 
                      className="flex items-center justify-between cursor-pointer hover:bg-muted/50 p-2 rounded-md"
                      onClick={() => setIsOtherExpanded(!isOtherExpanded)}
                    >
                      <span className="text-base font-medium">Inne</span>
                      {isOtherExpanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                    
                    {isOtherExpanded && (
                      <div className="ml-6 space-y-3 border-l-2 pl-4">
                        {otherVehicleTypes.map((type) => (
                          <div key={type.value} className="flex items-center space-x-3">
                            <RadioGroupItem 
                              value={`other_${type.value}`}
                              id={`other_${type.value}`}
                              className="w-5 h-5"
                            />
                            <Label 
                              htmlFor={`other_${type.value}`}
                              className="text-base font-medium cursor-pointer"
                            >
                              {type.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Card>
        );
      case 1:
        return (
          <Card className="p-6 mt-8">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">Poznaj cenę ubezpieczenia</h2>
              
              {/* Okres ubezpieczenia */}
              <div className="space-y-3">
                <Label className="text-lg">Okres ubezpieczenia Gap w miesiącach</Label>
                <RadioGroup
                  value={insurancePeriod}
                  onValueChange={setInsurancePeriod}
                  className="flex justify-between items-center max-w-md"
                >
                  {insurancePeriods.map((period) => (
                    <div key={period.value} className="flex flex-col items-center">
                      <RadioGroupItem 
                        value={period.value} 
                        id={`period-${period.value}`}
                        className="mb-1.5"
                      />
                      <Label 
                        htmlFor={`period-${period.value}`}
                        className="text-lg font-medium"
                      >
                        {period.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Limit ubezpieczenia */}
              <div className="space-y-3">
                <Label className="text-lg">Maksymalny limit ubezpieczenia (dopłata Gap)</Label>
                <RadioGroup
                  value={insuranceLimit}
                  onValueChange={setInsuranceLimit}
                  className="grid grid-cols-2 gap-4"
                >
                  {insuranceLimits.map((limit) => (
                    <div key={limit.value} className="flex items-center space-x-3">
                      <RadioGroupItem 
                        value={limit.value} 
                        id={`limit-${limit.value}`}
                        className="w-5 h-5"
                      />
                      <Label 
                        htmlFor={`limit-${limit.value}`}
                        className="text-lg font-medium"
                      >
                        {limit.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Rodzaj płatności */}
              <div className="space-y-3">
                <Label className="text-lg">Rodzaj płatności</Label>
                <RadioGroup
                  value={paymentType}
                  onValueChange={setPaymentType}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="single" 
                      id="payment-single"
                      className="w-5 h-5"
                    />
                    <Label 
                      htmlFor="payment-single"
                      className="text-lg font-medium"
                    >
                      Płatność jednorazowa
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="monthly" 
                      id="payment-monthly"
                      className="w-5 h-5"
                    />
                    <Label 
                      htmlFor="payment-monthly"
                      className="text-lg font-medium"
                    >
                      Ratalna miesięczna (wymagana karta kredytowa/debetowa)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Card>
        );
      case 2:
        return (
          <Card className="p-6 mt-8">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">Twoje dane</h2>
              
              {/* Dane osobowe */}
              <div className="space-y-3">
                <Label htmlFor="firstName" className="text-lg">
                  Imię
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Wprowadź imię"
                  className="text-lg h-12"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="lastName" className="text-lg">
                  Nazwisko
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Wprowadź nazwisko"
                  className="text-lg h-12"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-lg">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Wprowadź email"
                  className="text-lg h-12"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-lg">
                  Telefon
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Wprowadź telefon"
                  className="text-lg h-12"
                />
              </div>
            </div>
          </Card>
        );
      case 3:
        return (
          <Card className="p-6 mt-8">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">Dane pojazdu</h2>
              
              {/* Dane pojazdu */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="vehicleBrand" className="text-lg">
                    Marka pojazdu
                  </Label>
                  <Input
                    id="vehicleBrand"
                    type="text"
                    placeholder="Wprowadź markę pojazdu"
                    className="text-lg h-12"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="vehicleModel" className="text-lg">
                    Model pojazdu
                  </Label>
                  <Input
                    id="vehicleModel"
                    type="text"
                    placeholder="Wprowadź model pojazdu"
                    className="text-lg h-12"
                  />
                </div>
              </div>
            </div>
          </Card>
        );
      case 4:
        return (
          <Card className="p-6 mt-8">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">Podsumowanie</h2>
              
              {/* Podsumowanie */}
              <div className="space-y-4">
                <p className="text-base font-medium">
                  Dziękujemy za uzupełnienie ankiety. Twoje ubezpieczenie zostało złożone.
                </p>
              </div>
            </div>
          </Card>
        );
      default:
        return null;
    }
  };

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

        {/* Zawartość kroku */}
        {renderStepContent(currentStep)}

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
            disabled={
              currentStep === steps.length - 1 || 
              (currentStep === 0 && (!registrationDate || !vehicleType || !insuranceVariant || !vehicleBrand || !vehicleModel)) ||
              (currentStep === 1 && (!insurancePeriod || !insuranceLimit || !paymentType))
            }
          >
            Dalej
          </Button>
        </div>
      </Card>
    </div>
  );
}
