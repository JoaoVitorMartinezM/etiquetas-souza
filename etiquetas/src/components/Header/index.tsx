import Image from "next/image"
import Link from "next/link"
import { NavItem } from "../NavItem"

export const Header = () =>{
    return(
        <header className="hidden md:flex justify-between items-center md:px-4 py-8 font-bold bg-sky-500 ">
            <Link href="/" className="my-2">
            <Image
        src="/logo-header.png"
        width={200}
        height={300}
        alt="Etiquetas Souza"
        />
            </Link>
    
            <nav>
                <ul className="flex">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/sobre">Sobre</NavItem>
                    <NavItem href="/servicos">Serviços</NavItem>
                    <NavItem href="/produtos">Produtos</NavItem>
                    <NavItem href="/trabalhe-conosco">Trabalhe Conosco</NavItem>
                    <NavItem href="/contatos">Contatos</NavItem>
                </ul>
            </nav>
                    
        </header>
    )
}