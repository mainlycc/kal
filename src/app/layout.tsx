import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Footer } from "@/components/ui/footer";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const geistSans = Geist({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: "Kalkulator Ubezpieczeń",
  description: "Kalkulator składek ubezpieczeniowych",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col relative">
        <GradientBackground />
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex-1 flex justify-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/">
                        Strona główna
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/o-nas">
                        O Nas
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/faq">
                        FAQ
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/kontakt">
                        Kontakt
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <Link href="/ankieta" className="text-xl font-medium">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 text-xl px-8 py-6"
                >
                  Kup GAP
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
