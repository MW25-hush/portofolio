import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";
import { Bebas_Neue } from "next/font/google";

const bebas_neve = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'], 
  variable: '--font-bebas-neve',
});

export const metadata: Metadata = {
  title: "Mehdi Wahid Portofolio",
  description: "portfolio for my site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas_neve.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
