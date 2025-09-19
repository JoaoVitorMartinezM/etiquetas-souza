import { Title } from "@/components/tophograph/Title"
import { CiClock1, CiLinkedin } from "react-icons/ci";
import { SiGooglemaps, SiWhatsapp, SiMaildotru } from "react-icons/si";
import { IconType } from "react-icons";
import { FaInstagram } from "react-icons/fa";

interface Contact {
    type: "email" | "phone" | "social"
    contactName: string
    line1: string
    line2?: string
    label?: string
    icon: IconType
}

const HORARIO_ATENDIMENTO = "Atendimento de segunda à \
sexta-feira, das 7h às 19h."

const ENDERECO = "R. Antônio Luis Pereira, Galpão SN - Guarda do Cubatão"

const Contacts: Contact[] = [
    {
        type: "phone",
        contactName: "Telefone Souza Etiquetas",
        line1: "(XX) XXXXX-XXXX",
        line2: "(YY) YYYYY-YYYY",
        icon: SiWhatsapp
    },
    {
        type: "email",
        contactName: "Email Souza Etiquetas",
        line1: "contato@souzaetiquetas.com.br",
        line2: "comercial@souzaetiquetas.com.br",
        icon: SiMaildotru
    },
    {
        type: "email",
        contactName: "Email Suporte",
        line1: "contato@joaodesenvolvedor.com.br",
        icon: SiMaildotru
    },
    {
        type: "social",
        contactName: "Instagram",
        line1: "https://www.instagram.com/souza-etiquetas.official/",
        label: "@souza-etiquetas.official",
        icon: FaInstagram
    },
    {
        type: "social",
        contactName: "LinkedIn",
        line1: "https://www.linkedin.com/in/souza-etiquetas/",
        label: "/in/souza-etiquetas",
        icon: CiLinkedin
    }
]

const ContactsPage = () => {
    return (
        <section className="w-100 md:w-2/3 xl:w-1/3 mx-auto bg-slate-100 rounded-xl px-8 py-4 m-8 bg-[url(/background-contatos.png)] bg-cover bg-right bg-no-repeat">
            <Title text="Fale com a gente!" />
            {
                Contacts.map(
                    (contact, index) => {
                        const Icon = contact.icon
                        return (
                            <div className="py-2 md:py-4 grow" key={index}>
                                <span className="text-md lg:text-lg font-bold">{contact.contactName}</span>
                                {
                                    contact.type === "social" ?
                                        <a href={contact.line1} target="blank"><p className="my-2"><Icon className="inline mx-2 text-2xl" />{!contact?.label ? contact.line1 : contact.label}</p></a>
                                        : <p className="my-2"><Icon className="inline mx-2 text-2xl" />{!contact?.label ? contact.line1 : contact.label}</p>
                                }
                                {contact?.line2 ? <p><Icon className="inline mx-2 text-2xl" />{contact.line2}</p> : ""}
                            </div>
                        )
                    }
                )
            }
            <span className="text-md lg:text-lg font-bold">Funcionamento:</span>
            <p>{<CiClock1 className="inline text-2xl m-2" />}{` ${HORARIO_ATENDIMENTO}`}</p>
            <p>{<SiGooglemaps className="inline text-2xl mx-2" />}{` ${ENDERECO}`}</p>
        </section>
    )
}

export default ContactsPage