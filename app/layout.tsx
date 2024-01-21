import type { Metadata } from "next";

import "./globals.css";
import { Footer, Navbar } from "@/components";


export const metadata: Metadata = {
  title: "Macduff Estates",
  description: "Discover the best castles in the world."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        
        {children}
        <Footer /></body>
    </html>
  );
}
