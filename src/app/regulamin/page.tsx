import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regulamin | Kalkulator Ubezpieczeń",
  description: "Regulamin korzystania z serwisu kalkulatora ubezpieczeń GAP",
}

export default function RegulaminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Regulamin serwisu</h1>
      
      <div className="max-w-3xl mx-auto space-y-8 text-gray-700">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">§1. Postanowienia ogólne</h2>
          <div className="space-y-2">
            <p className="text-lg">
              1. Niniejszy regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem [adres_strony].
            </p>
            <p className="text-lg">
              2. Właścicielem serwisu jest [nazwa_firmy] z siedzibą w [adres].
            </p>
            <p className="text-lg">
              3. Serwis służy do kalkulacji i zakupu ubezpieczeń GAP.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">§2. Definicje</h2>
          <div className="space-y-2">
            <p className="text-lg">
              1. Serwis - strona internetowa dostępna pod adresem [adres_strony].
            </p>
            <p className="text-lg">
              2. Użytkownik - osoba fizyczna lub prawna korzystająca z Serwisu.
            </p>
            <p className="text-lg">
              3. Ubezpieczenie GAP - ubezpieczenie straty finansowej GAP.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">§3. Zasady korzystania z Serwisu</h2>
          <div className="space-y-2">
            <p className="text-lg">
              1. Korzystanie z Serwisu jest dobrowolne i bezpłatne.
            </p>
            <p className="text-lg">
              2. Użytkownik zobowiązuje się do podawania prawdziwych danych podczas korzystania z Serwisu.
            </p>
            <p className="text-lg">
              3. Zakazane jest dostarczanie przez Użytkownika treści o charakterze bezprawnym.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">§4. Proces zakupu ubezpieczenia</h2>
          <div className="space-y-2">
            <p className="text-lg">
              1. Kalkulacja składki ubezpieczeniowej ma charakter informacyjny.
            </p>
            <p className="text-lg">
              2. Zawarcie umowy ubezpieczenia następuje po akceptacji oferty i opłaceniu składki.
            </p>
            <p className="text-lg">
              3. Szczegółowe warunki ubezpieczenia określa polisa oraz OWU.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">§5. Postanowienia końcowe</h2>
          <div className="space-y-2">
            <p className="text-lg">
              1. Regulamin wchodzi w życie z dniem [data].
            </p>
            <p className="text-lg">
              2. Właściciel Serwisu zastrzega sobie prawo do zmiany Regulaminu.
            </p>
            <p className="text-lg">
              3. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 