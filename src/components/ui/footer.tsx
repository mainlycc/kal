import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolumna 1 - O nas */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">O nas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/o-nas" className="text-gray-400 hover:text-white transition-colors">
                  O firmie
                </Link>
              </li>
              <li>
                <Link href="/kariera" className="text-gray-400 hover:text-white transition-colors">
                  Kariera
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumna 2 - Kalkulatory */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Kalkulatory</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kalkulator/fakturowy" className="text-gray-400 hover:text-white transition-colors">
                  Ubezpieczenie Fakturowe
                </Link>
              </li>
              <li>
                <Link href="/kalkulator/casco" className="text-gray-400 hover:text-white transition-colors">
                  Ubezpieczenie CASCO
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumna 3 - Dokumenty */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Dokumenty</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/regulamin" className="text-gray-400 hover:text-white transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci" className="text-gray-400 hover:text-white transition-colors">
                  Polityka Prywatności
                </Link>
              </li>
              <li>
                <Link href="/rodo" className="text-gray-400 hover:text-white transition-colors">
                  RODO
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumna 4 - Kontakt */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ul. Przykładowa 123</li>
              <li>00-000 Warszawa</li>
              <li>
                <a href="tel:+48123456789" className="hover:text-white transition-colors">
                  tel: +48 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@ubezpieczenia.pl" className="hover:text-white transition-colors">
                  email: kontakt@ubezpieczenia.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dolna sekcja */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kalkulator Ubezpieczeń. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
} 