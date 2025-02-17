import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Anveshana '25",
  description: "Generated by IIC BMSIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
      // className="bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950"
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
