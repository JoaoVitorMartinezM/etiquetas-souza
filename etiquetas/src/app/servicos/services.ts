import { IconType } from "react-icons"


export interface Service {
    name: string
    description: string
    icon: IconType | string,
    sampleUrl?: string
}


const Services: Service[] = [
    {
        name: "Impressão Digital de Alta Definição",
        description: "Impressão de etiquetas e rótulos garantindo a definição e precisão mesmo em texto ou pequenas áreas de impressão.",
        icon: "/icons/busca.png"
    },
    {
        name: "Acabamentos Especiais",
        description: "Garantimos a cor e tonalidade que o cliente desejar.",
        icon: "/icons/certificado.png"
    },
    {
        name: "Premium",
        description: "Nosso melhor nos recortes, customizações, materiais, laminação e outros.",
        icon: "/icons/premium.png",
        sampleUrl: "/samples/etiqueta_premium.jpg"
    },
    {
        name: "Orçamentos Personalizados",
        description: "Negociamos com os nossos clientes sempre o melhor orçamentos, alinhando a expectativa do cliente em cada demanda, a satisfação é sempre a prioridade.",
        icon: "/icons/engrenagem.png"
    },
    {
        name: "Etiquetas Técnicas",
        description: "Produzimos etiquetas técnicas informativas para produtos eletrodomésticos, selos e entre outros.",
        icon: "/icons/etiqueta_tecnica.png",
        sampleUrl: "/samples/etq_tecnica_exemplo.jpg"
    },
    {
        name: "Soluções Independente do Volume",
        description: "Por mais desafiadora que seja a entrega, realizamos com primor e compromisso",
        icon: "/icons/home.png"
    },
    {
        name: "Entrega Rápida",
        description: "Adaptamos nossas rotas para realizar a entrega o mais rápido possível, pois nosso cliente não pode esperar.",
        icon: "/icons/delivery.png"
    }
]

export default Services