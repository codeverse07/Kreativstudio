import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import BottomNav from "@/components/ui/BottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kreativ Ad Studio | Premium Ad Production",
  description: "Luxury advertisement production for beauty, cosmetics, and brand campaigns. Photography, videography, and digital marketing expert.",
  keywords: "ad production, beauty advertising, cosmetic ads, luxury brand campaigns, photography, videography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem>
          <SmoothScroll>
            <Navbar />
            <main className="pb-24 md:pb-0">{children}</main>
            <Footer />
            <BottomNav />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
