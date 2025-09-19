import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Viewport } from 'next'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { NavItem } from "@/components/NavItem";
import Image from "next/image";
import Link from "next/link";
import { SiSublimetext } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";
import { FaTags } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import { Caption } from "@/components/tophograph/Caption";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Etiquetas Souza",
  description: "Site de uma empresa que produz rótulos de embalagens,\
   com mais de 10 anos de experiência.",

};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistMono.variable} flex flex-col justify-between`}
      >
        <div className="flex justify-between p-4 md:hidden">
          <Sheet >
            <SheetTrigger className="text-(--chart-3)">
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-[300px] " side="left">
              <SheetHeader>
                <SheetTitle>MENU</SheetTitle>
                <SheetDescription>
                  Navegue entre as opções.
                </SheetDescription>
              </SheetHeader>
              <NavItem href="/"><IoHome className="text-2xl mr-2"/>Home</NavItem>
              <NavItem href="/sobre"><SiSublimetext className="text-2xl mr-2"/>Sobre</NavItem>
              <NavItem href="/servicos"><GrPersonalComputer className="text-2xl mr-2"/>Serviços</NavItem>
              <NavItem href="/produtos"><FaTags className="text-2xl mr-2"/>Produtos</NavItem>
              <NavItem href="/trabalhe-conosco"><IoIosPeople className="text-2xl mr-2"/>Trabalhe Conosco</NavItem>
              <NavItem href="/contatos"><HiSpeakerphone className="text-2xl mr-2"/>Contatos</NavItem>
            </SheetContent>
          </Sheet>
          <Caption text="Inovação em cada detalhe" />
          <Link href={'/'}>
            <Image height={100} width={40} src='/logo-mobile.png' alt="Logo da empresa Souza Etiquetas" />
          </Link>
        </div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
