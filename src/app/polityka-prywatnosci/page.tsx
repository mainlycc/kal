import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Prywatności | Kalkulator Ubezpieczeń",
  description: "Polityka prywatności serwisu kalkulatora ubezpieczeń GAP",
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Polityka Prywatności</h1>
      
      <div className="max-w-3xl mx-auto space-y-8 text-gray-700">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">1. Informacje ogólne</h2>
          <div className="space-y-2">
            <p className="text-lg">
              Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych Użytkowników korzystających z serwisu internetowego dostępnego pod adresem [adres_strony].
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">2. Administrator danych osobowych</h2>
          <div className="space-y-2">
            <p className="text-lg">
              Administratorem danych osobowych jest [nazwa_firmy] z siedzibą w [adres], wpisana do rejestru przedsiębiorców pod numerem KRS: [numer], NIP: [numer], REGON: [numer].
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">3. Zakres zbieranych danych</h2>
          <div className="space-y-2">
            <p className="text-lg">
              W trakcie korzystania z Serwisu możemy zbierać następujące dane:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg">Imię i nazwisko</li>
              <li className="text-lg">Adres e-mail</li>
              <li className="text-lg">Numer telefonu</li>
              <li className="text-lg">Dane pojazdu</li>
              <li className="text-lg">Informacje o sposobie korzystania z Serwisu</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">4. Cel przetwarzania danych</h2>
          <div className="space-y-2">
            <p className="text-lg">
              Dane osobowe przetwarzamy w następujących celach:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg">Kalkulacja składki ubezpieczeniowej</li>
              <li className="text-lg">Zawarcie i realizacja umowy ubezpieczenia</li>
              <li className="text-lg">Obsługa zapytań i reklamacji</li>
              <li className="text-lg">Marketing bezpośredni naszych usług</li>
              <li className="text-lg">Realizacja obowiązków prawnych</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">5. Prawa użytkownika</h2>
          <div className="space-y-2">
            <p className="text-lg">
              Użytkownik ma prawo do:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg">Dostępu do swoich danych</li>
              <li className="text-lg">Sprostowania danych</li>
              <li className="text-lg">Usunięcia danych</li>
              <li className="text-lg">Ograniczenia przetwarzania</li>
              <li className="text-lg">Przenoszenia danych</li>
              <li className="text-lg">Wniesienia sprzeciwu</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">6. Pliki cookies</h2>
          <div className="space-y-2">
            <p className="text-lg">
              Serwis wykorzystuje pliki cookies w celu świadczenia usług na najwyższym poziomie. Szczegółowe informacje o plikach cookies znajdziesz w naszej Polityce Cookies.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">7. Kontakt</h2>
          <div className="space-y-2">
            <p className="text-lg">
              W sprawach związanych z ochroną danych osobowych można kontaktować się z nami pod adresem email: [adres_email] lub pisemnie na adres siedziby firmy.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 