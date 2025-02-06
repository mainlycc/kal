"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserRound, Users } from "lucide-react";
import Link from "next/link";

export default function ChooseOption() {
  return (
    <div className="container mx-auto min-h-[calc(100vh-200px)] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-12">
        {/* Lewa strona - Samodzielnie */}
        <div className="flex flex-col items-center">
          <Card className="w-full max-w-md p-8 hover:shadow-xl transition-shadow duration-300 space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <UserRound className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Wypełnij wniosek samodzielnie</h2>
              <p className="text-muted-foreground text-lg">
                Przejdź przez prosty proces wypełniania wniosku online w swoim własnym tempie
              </p>
            </div>

            <div className="space-y-4 text-left">
              <h3 className="font-semibold text-lg">Zalety:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Dostępne 24/7
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Własne tempo wypełniania
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Możliwość zapisania postępu
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Natychmiastowa wycena
                </li>
              </ul>
            </div>

            <Button className="w-full h-12 text-lg" asChild>
              <Link href="/ankieta">
                Rozpocznij samodzielnie
              </Link>
            </Button>
          </Card>
        </div>

        {/* Prawa strona - Z agentem */}
        <div className="flex flex-col items-center">
          <Card className="w-full max-w-md p-8 hover:shadow-xl transition-shadow duration-300 space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Wypełnij wniosek z agentem</h2>
              <p className="text-muted-foreground text-lg">
                Skorzystaj z pomocy naszego doświadczonego agenta, który przeprowadzi Cię przez cały proces
              </p>
            </div>

            <div className="space-y-4 text-left">
              <h3 className="font-semibold text-lg">Zalety:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Profesjonalne doradztwo
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Pomoc w wyborze opcji
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Wyjaśnienie szczegółów
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  Wsparcie na każdym etapie
                </li>
              </ul>
            </div>

            <Button className="w-full h-12 text-lg" variant="secondary" asChild>
              <Link href="/kontakt">
                Umów się z agentem
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
