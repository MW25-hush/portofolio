import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/Footer";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
