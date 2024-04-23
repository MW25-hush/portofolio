import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/Footer";
import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehdi Wahid • Front-end Engineer",
  description: "portfolio for my site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={source_code_pro.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
