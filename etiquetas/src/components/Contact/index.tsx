import { PhoneCall, Instagram, Linkedin } from "@deemlol/next-icons"

export const Contact = () => {
    return (
        <div className="flex w-full md:w-1/2 justify-center items-start h-100 text-xl px-4">
            <div className="flex flex-col text-md text-white font-bold space-y-4">
                <div className="h-32 w-92 md:w-50 bg-[url(/logo-footer.png)] bg-cover bg-center mix-blend-multiply">
                </div>
                <p>Endereço:<br />Guarda do Cubatão, Palhoça <br />Rua José da Silva,
                    88-134-555</p>
                <p>Telefone:<br /><a href="tel:483283-4061">(48) 3283-4061</a></p>
                <p>E-Mail:<br /><a href="mailto:orcamento@gmail.com">orcamento@gmail.com</a></p>
                <div className="flex gap-4">
                    <a href="https://api.whatsapp.com/send?l=pt_br&phone=554832834061" target="_blank"><PhoneCall size={32} color="#FFFFFF" /></a>
                    <a href="https://www.instagram.com/etiquetas-souza" target="_blank"><Instagram size={32} color="#FFFFFF" /></a>
                    <a href="https://www.linkedin.com/in/etiquetas-souza" target="_blank"><Linkedin size={32} color="#FFFFFF" /></a>
                </div>
            </div>

        </div>

    )
}