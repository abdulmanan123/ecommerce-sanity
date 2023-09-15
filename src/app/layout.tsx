import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GilgitApp | Marketplace to Buy/Sell your Favourite items",
  description:
    "GilgitApp is an online marketplace to buy/sell locally! Find a wide range of items including cars, mobile phones, laptops, electronics, plots, residences, etc.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <div className="max-w-full mx-auto bg-background min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
