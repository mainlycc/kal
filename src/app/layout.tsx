import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Footer } from "@/components/ui/footer";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}>
        <GradientBackground />
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex-1 flex justify-center">
                <NavigationMenu>
                  <NavigationMenuList className="gap-8">
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className="text-lg font-medium hover:text-primary text-center">
                          Strona główna
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/o-nas" legacyBehavior passHref>
                        <NavigationMenuLink className="text-lg font-medium hover:text-primary text-center">
                          O nas
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/kontakt" legacyBehavior passHref>
                        <NavigationMenuLink className="text-lg font-medium hover:text-primary text-center">
                          Kontakt
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link href="/path" className="text-lg font-medium">
                  Kup GAP
                </Link>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
