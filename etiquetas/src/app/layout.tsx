import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Etiquetas Souza",
  description: "Site de uma empresa que produz rótulos de embalagens,\
   com mais de 10 anos de experiência.",
   icons: {
    icon: '/public/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={` ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
