"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText, ShieldCheck, TrendingDown, Banknote, Car, Clock } from "lucide-react";
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
          <Card className="w-full max-w-xl p-6 shadow-2xl border-8 border-blue-500/50 hover:border-green-500 transition-colors duration-300">
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
          <h1 className="text-[40px] leading-tight font-bold mb-4 text-center max-w-xl">
            Znajdź idealne ubezpieczenie dla swojego auta i ciesz się spokojną jazdą
          </h1>
          <p className="text-center text-muted-foreground text-base max-w-lg mb-6">
            Wybierz rodzaj ubezpieczenia i oblicz składkę dla swojego pojazdu.
            <br className="hidden md:block" />
            <span className="font-semibold inline-flex items-center">
              <FileText className="w-5 h-5 mr-1 text-primary" />
              Ubezpieczenie fakturowe:
            </span> Podstawowa stawka 2% wartości pojazdu
            <br className="hidden md:block" />
            <span className="font-semibold inline-flex items-center">
              <Car className="w-5 h-5 mr-1 text-primary" />
              Ubezpieczenie CASCO:
            </span> Podstawowa stawka 4% wartości pojazdu
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
        <Card className="p-6 bg-[#982F42] shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 rounded-xl hover:-translate-y-2 hover:rotate-1 cursor-pointer">
          <h2 className="flex items-center text-2xl font-bold mb-4 text-white">
            <div className="bg-white p-2 rounded-full mr-3">
              <FileText className="text-[#982F42]" />
            </div>
            Co to jest ubezpieczenie GAP fakturowy?
          </h2>
          <div className="space-y-4 text-white">
            <p className="leading-relaxed">
              GAP fakturowy to ubezpieczenie, które wyrównuje różnicę między wartością rynkową pojazdu
              a wartością z faktury zakupu w przypadku szkody całkowitej lub kradzieży. Jest szczególnie
              korzystne dla właścicieli nowych pojazdów, którzy chcą zabezpieczyć się przed utratą wartości auta.
            </p>
            <p className="leading-relaxed">
              Dzięki temu ubezpieczeniu otrzymujesz odszkodowanie równe początkowej wartości pojazdu,
              niezależnie od jego aktualnej wartości rynkowej.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-white">Główne korzyści:</h3>
            <ul className="space-y-3">
              <li className="flex items-center bg-white/10 p-3 rounded">
                <TrendingDown className="mr-3 text-green-600" />
                <span className="text-white">Uzupełnienie różnicy między wartością rynkową a fakturową</span>
              </li>
              <li className="flex items-center bg-white/10 p-3 rounded">
                <ShieldCheck className="mr-3 text-blue-600" />
                <span className="text-white">Ochrona przed skutkami amortyzacji pojazdu</span>
              </li>
              <li className="flex items-center bg-white/10 p-3 rounded">
                <Banknote className="mr-3 text-yellow-600" />
                <span className="text-white">Wypłata odszkodowania odpowiadającego wartości zakupu</span>
              </li>
              <li className="flex items-center bg-white/10 p-3 rounded">
                <Car className="mr-3 text-red-600" />
                <span className="text-white">Zabezpieczenie inwestycji w nowy pojazd</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Ubezpieczenie CASCO */}
        <Card className="p-6 bg-blue-500 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 rounded-xl hover:-translate-y-2 hover:rotate-1 cursor-pointer">
          <h2 className="flex items-center text-2xl font-bold mb-4 text-black">
            <div className="bg-white p-2 rounded-full mr-3">
              <Car className="text-blue-600" />
            </div>
            Co to jest ubezpieczenie GAP CASCO?
          </h2>
          <div className="space-y-4 text-black">
            <p className="leading-relaxed">
              GAP CASCO chroni przed stratą finansową wynikającą z różnicy między wartością rynkową
              pojazdu a wartością z polisy w przypadku szkody całkowitej lub kradzieży.
            </p>
            <p className="leading-relaxed">
              To rozszerzenie standardowego ubezpieczenia AC, które gwarantuje wypłatę pełnej kwoty
              z polisy, nawet jeśli wartość pojazdu znacząco spadła.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-black">Główne cechy:</h3>
            <ul className="space-y-3">
              <li className="flex items-center bg-white p-3 rounded">
                <Banknote className="mr-3 text-green-600" />
                Podstawowa stawka: 4% wartości pojazdu
              </li>
              <li className="flex items-center bg-white p-3 rounded">
                <ShieldCheck className="mr-3 text-blue-600" />
                Szeroka ochrona ubezpieczeniowa
              </li>
              <li className="flex items-center bg-white p-3 rounded">
                <Clock className="mr-3 text-yellow-600" />
                Elastyczny wybór okresu ubezpieczenia
              </li>
              <li className="flex items-center bg-white p-3 rounded">
                <TrendingDown className="mr-3 text-red-600" />
                Wyższy współczynnik za wiek pojazdu
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
