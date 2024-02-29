import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";

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
      <body className="grid grid-cols-4 lg:grid-cols-12">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
