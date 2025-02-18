import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Często zadawane pytania | Kalkulator Ubezpieczeń",
  description: "Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące ubezpieczeń GAP",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Często zadawane pytania</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Co to jest ubezpieczenie GAP?</h2>
          <p className="text-lg text-gray-700">
            Ubezpieczenie GAP (Guaranteed Asset Protection) to dodatkowe ubezpieczenie, które pokrywa różnicę między wartością fakturową pojazdu a kwotą wypłaconą z ubezpieczenia AC w przypadku całkowitego zniszczenia lub kradzieży pojazdu.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Dla kogo przeznaczone jest ubezpieczenie GAP?</h2>
          <p className="text-lg text-gray-700">
            Ubezpieczenie GAP jest szczególnie polecane dla właścicieli nowych pojazdów, osób korzystających z kredytu na zakup samochodu oraz firm leasingowych. Jest to idealne rozwiązanie dla tych, którzy chcą zabezpieczyć się przed stratą finansową wynikającą ze spadku wartości pojazdu.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Jak długo trwa ochrona ubezpieczeniowa GAP?</h2>
          <p className="text-lg text-gray-700">
            Standardowy okres ochrony ubezpieczeniowej GAP wynosi od 24 do 60 miesięcy. Długość okresu ochrony można dostosować do indywidualnych potrzeb i planowanego okresu użytkowania pojazdu.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Jakie są warunki zawarcia ubezpieczenia GAP?</h2>
          <p className="text-lg text-gray-700">
            Podstawowym warunkiem jest posiadanie aktywnego ubezpieczenia AC (Autocasco). Pojazd zazwyczaj nie może być starszy niż 5 lat w momencie zawierania umowy, a jego przebieg nie powinien przekraczać określonego limitu kilometrów.
          </p>
        </div>
      </div>
    </div>
  )
} 