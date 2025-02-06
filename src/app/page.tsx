"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export default function Home() {
  const [carValue, setCarValue] = useState<string>("");
  const [productionYear, setProductionYear] = useState<string>("");
  const [insurancePeriod, setInsurancePeriod] = useState<string>("12");
  const [premium, setPremium] = useState<number | null>(null);

  const insurancePeriods = [
    { value: "12", label: "12" },
    { value: "24", label: "24" },
    { value: "36", label: "36" },
    { value: "48", label: "48" },
    { value: "60", label: "60" },
  ];

  const handleCalculate = (type: 'fakturowy' | 'casco') => {
    const baseValue = Number(carValue);
    const year = Number(productionYear);
    const period = Number(insurancePeriod);
    
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - year;
    
    let calculatedPremium;
    
    if (type === 'fakturowy') {
      calculatedPremium = (baseValue * 0.02) * (1 + (carAge * 0.01)) * (period / 12);
    } else {
      calculatedPremium = (baseValue * 0.04) * (1 + (carAge * 0.015)) * (period / 12);
    }
    
    setPremium(Math.round(calculatedPremium * 100) / 100);
  };

  const InsuranceCalculator = ({ type }: { type: 'fakturowy' | 'casco' }) => (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="carValue" className="text-lg">Wartość pojazdu (PLN)</Label>
        <Input
          id="carValue"
          type="number"
          placeholder="Wprowadź wartość pojazdu"
          value={carValue}
          onChange={(e) => setCarValue(e.target.value)}
          className="text-lg h-12"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="productionYear" className="text-lg">Rok produkcji</Label>
        <Input
          id="productionYear"
          type="number"
          placeholder="Wprowadź rok produkcji"
          value={productionYear}
          min={1900}
          max={new Date().getFullYear()}
          onChange={(e) => setProductionYear(e.target.value)}
          className="text-lg h-12"
        />
      </div>

      <div className="space-y-3">
        <Label className="text-lg">Okres ubezpieczenia (miesiące)</Label>
        <RadioGroup
          value={insurancePeriod}
          onValueChange={setInsurancePeriod}
          className="flex justify-between items-center"
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

      <Button 
        className="w-full h-12 text-lg font-semibold mt-8" 
        onClick={() => handleCalculate(type)}
        disabled={!carValue || !productionYear || !insurancePeriod}
      >
        Oblicz składkę
      </Button>

      {premium !== null && (
        <>
          <Separator className="my-6" />
          <div className="text-center space-y-4">
            <Label className="text-lg">Wysokość składki:</Label>
            <p className="text-4xl font-bold text-primary mt-3">
              {premium.toLocaleString('pl-PL')} PLN
            </p>
            <Button 
              variant="secondary"
              className="w-full h-12 text-lg font-semibold"
              onClick={() => window.location.href = '/path'}
              aria-label="Kup ubezpieczenie GAP"
            >
              Kup GAP
            </Button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {/* Lewa strona - kalkulator */}
        <div className="flex flex-col items-center justify-center p-8 bg-muted/50 rounded-lg">
          <Card className="w-full max-w-xl p-6 shadow-2xl">
            <Tabs defaultValue="fakturowy" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 h-14 shadow-sm">
                <TabsTrigger 
                  value="fakturowy" 
                  className="text-base data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-md rounded-md transition-all px-2 h-12"
                >
                  Fakturowy
                </TabsTrigger>
                <TabsTrigger 
                  value="casco" 
                  className="text-base data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-md rounded-md transition-all px-2 h-12"
                >
                  Casco
                </TabsTrigger>
              </TabsList>
              <div className="mt-4">
                <TabsContent value="fakturowy" className="mt-0">
                  <InsuranceCalculator type="fakturowy" />
                </TabsContent>
                <TabsContent value="casco" className="mt-0">
                  <InsuranceCalculator type="casco" />
                </TabsContent>
              </div>
            </Tabs>
          </Card>
        </div>

        {/* Prawa strona - zmodyfikowana zawartość */}
        <div className="flex flex-col items-center justify-center p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center leading-tight">
            Znajdź idealne ubezpieczenie dla swojego auta i ciesz się spokojną jazdą
          </h1>
          <p className="text-center text-muted-foreground text-lg max-w-md mb-8">
            Wybierz rodzaj ubezpieczenia i oblicz składkę dla swojego pojazdu.
            <br /><br />
            <span className="font-semibold">Ubezpieczenie fakturowe:</span> Podstawowa stawka 2% wartości pojazdu
            <br />
            <span className="font-semibold">Ubezpieczenie CASCO:</span> Podstawowa stawka 4% wartości pojazdu
          </p>
          <Image
            src="/car.svg"
            alt="Ubezpieczenie samochodu"
            width={400}
            height={400}
            className="mt-4"
            priority
          />
        </div>
      </div>

      {/* Nowa sekcja "Co to jest" */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
        {/* Ubezpieczenie Fakturowe */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Co to jest ubezpieczenie fakturowe?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Ubezpieczenie fakturowe to specjalny rodzaj ochrony ubezpieczeniowej dedykowany dla pojazdów zakupionych na fakturę VAT.
            </p>
            <h3 className="text-lg font-semibold text-foreground">Główne cechy:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Podstawowa stawka: 2% wartości pojazdu</li>
              <li>Ochrona wartości fakturowej pojazdu</li>
              <li>Możliwość wyboru okresu ubezpieczenia</li>
              <li>Uwzględnienie wieku pojazdu w kalkulacji</li>
            </ul>
            <p>
              Składka jest obliczana na podstawie wartości pojazdu, jego wieku oraz wybranego okresu ubezpieczenia.
            </p>
          </div>
        </Card>

        {/* Ubezpieczenie CASCO */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Co to jest ubezpieczenie CASCO?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Ubezpieczenie CASCO (Comprehensive Automobile Service Contract) to dobrowolne ubezpieczenie chroniące pojazd przed różnymi rodzajami ryzyka.
            </p>
            <h3 className="text-lg font-semibold text-foreground">Główne cechy:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Podstawowa stawka: 4% wartości pojazdu</li>
              <li>Szeroka ochrona ubezpieczeniowa</li>
              <li>Elastyczny wybór okresu ubezpieczenia</li>
              <li>Wyższy współczynnik za wiek pojazdu</li>
            </ul>
            <p>
              Wysokość składki zależy od wartości pojazdu, jego wieku oraz długości okresu ubezpieczenia, z uwzględnieniem wyższego współczynnika ryzyka.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
