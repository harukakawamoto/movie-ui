import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Page as Header } from "@/components/Header/Page";
import { Page as Footer } from "@/components/Footer/Page";
import { useEffect } from "react";
import { worker } from "@/mocks/browser";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full flex flex-col bg-main-black`}>
        <Header />
        <main className="flex-grow flex items-center justify-center relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
