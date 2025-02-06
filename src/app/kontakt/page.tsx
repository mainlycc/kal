"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj dodać logikę wysyłania formularza
    console.log("Form data:", formData);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Skontaktuj się z nami</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lewa strona - Formularz */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg">
                Imię i nazwisko
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Jan Kowalski"
                className="h-12 text-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">
                Adres email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jan@example.com"
                className="h-12 text-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg">
                Numer telefonu
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+48 123 456 789"
                className="h-12 text-lg"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg">
                Wiadomość
              </Label>
              <Textarea
                id="message"
                placeholder="Twoja wiadomość..."
                className="min-h-[150px] text-lg resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full h-12 text-lg font-semibold">
              Wyślij wiadomość
            </Button>
          </form>
        </Card>

        {/* Prawa strona - Informacje kontaktowe */}
        <Card className="p-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Dane kontaktowe</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Adres</h3>
                  <p className="text-muted-foreground">
                    ul. Przykładowa 123<br />
                    00-000 Warszawa<br />
                    Polska
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a href="mailto:kontakt@ubezpieczenia.pl" className="text-muted-foreground hover:text-primary">
                    kontakt@ubezpieczenia.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Telefon</h3>
                  <a href="tel:+48123456789" className="text-muted-foreground hover:text-primary">
                    +48 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Godziny pracy</h3>
                  <p className="text-muted-foreground">
                    Poniedziałek - Piątek: 8:00 - 16:00<br />
                    Sobota - Niedziela: Zamknięte
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Dodatkowe informacje</h3>
              <p className="text-muted-foreground">
                Jesteśmy dostępni dla Ciebie w godzinach pracy. W przypadku pilnego kontaktu poza godzinami pracy, 
                prosimy o wysłanie wiadomości email - odpowiemy najszybciej jak to możliwe.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}