import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BareValue | Tasación de Nuda Propiedad",
  description: "Herramienta profesional para el cálculo de tasación de nuda propiedad e inversiones inmobiliarias con precios ajustados a la esperanza de vida",
  keywords: ["nuda propiedad", "tasación", "inversión inmobiliaria", "esperanza de vida", "valoración"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
