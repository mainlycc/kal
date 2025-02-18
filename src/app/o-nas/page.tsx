import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Lewa kolumna - tekst */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Poznaj <span className="text-primary">Business Care</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Twój kompleksowy partner w zakresie obsługi ubezpieczeniowej, leasingowej oraz doradztwa
            </p>
          </div>
          
          <Card className="p-8 bg-white/50 backdrop-blur-sm">
            <div className="prose prose-lg">
              <p className="leading-relaxed text-muted-foreground">
                Business Care to kompleksowy partner w zakresie obsługi ubezpieczeniowej,
                leasingowej oraz doradztwa dla firm i osób prywatnych. Dzięki wieloletniemu
                doświadczeniu oraz indywidualnemu podejściu do każdego klienta, oferujemy
                szeroki wachlarz usług, które pomagają w zarządzaniu ryzykiem oraz
                zapewniają bezpieczeństwo finansowe.
              </p>
              
              <p className="leading-relaxed text-muted-foreground mt-4">
                Nasza oferta obejmuje m.in. ubezpieczenia OC dla firm, ubezpieczenia mienia,
                samochodowe CASCO, a także leasingi – dostosowane do potrzeb małych i średnich firm.
                Oferujemy rozwiązania, które umożliwiają rozwój biznesu, zapewniając wygodny dostęp
                do środków trwałych, nie obciążając budżetu firmy.
              </p>
              
              <p className="leading-relaxed text-muted-foreground mt-4">
                Dodatkowo, prowadzimy biuro rachunkowe, które specjalizuje się w obsłudze
                jednoosobowych działalności gospodarczych. Dzięki naszym usługom, przedsiębiorcy mogą
                skupić się na rozwoju swojego biznesu, mając pewność, że sprawy księgowe
                są prowadzone zgodnie z obowiązującymi przepisami, a rozliczenia są
                transparentne i rzetelne.
              </p>
              
              <p className="leading-relaxed text-muted-foreground mt-4 font-medium">
                Business Care to firma, która stawia na profesjonalizm, transparentność i pełne
                zrozumienie potrzeb swoich klientów. Zaufaj ekspertom i zadbaj o bezpieczeństwo
                swojego biznesu z pomocą Business Care!
              </p>
            </div>
          </Card>
        </div>

        {/* Prawa kolumna - grafiki i statystyki */}
        <div className="space-y-8">
          <Image
            src="/Insurance.jpg"
            alt="Ubezpieczenia i doradztwo"
            width={400}
            height={300}
            className="w-full max-w-[400px] mx-auto rounded-lg shadow-lg"
            priority
          />
          
          {/* Statystyki */}
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <div className="p-6 text-center bg-red-500 text-white rounded-lg">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="mt-2">Lat doświadczenia</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center bg-yellow-400 text-black rounded-lg">
                <h3 className="text-3xl font-bold">1000+</h3>
                <p className="mt-2">Zadowolonych klientów</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center bg-yellow-400 text-black rounded-lg">
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="mt-2">Wsparcie</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center bg-red-500 text-white rounded-lg">
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="mt-2">Satysfakcji</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
