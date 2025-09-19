export interface Product {
  productUrl: string
  name: string
  description: string
  materials: string[]
  purpose: string
  pros: string
  cons: string
}

const Products: Product[] = [
  {
    name: "Rótulos para Alimentos",
    description: "Conforto e design para seus produtos alimentícios.",
    materials: ["Papel couchê"],
    productUrl: "/products/rotulo_alimenticio.png",
    purpose:
      "Ideal para embalagens de alimentos secos, cosméticos, produtos de higiene, farmacêuticos e uso geral em ambientes internos.",
    pros: "Ótima impressão de cores, custo acessível, acabamento fosco ou brilhante.",
    cons: "Não resiste bem à umidade ou atrito constante.",
  },
  {
    name: "Rótulos BOPP",
    description: "Resistência e durabilidade para diferentes tipos de embalagens.",
    materials: ["BOPP branco", "BOPP transparente", "BOPP metalizado"],
    productUrl: "/products/rotulo_bopp.webp",
    purpose:
      "Ideal para bebidas, cosméticos, produtos refrigerados ou congelados.",
    pros: "Alta durabilidade, resistente à água, óleo e rasgos.",
    cons: "Custo mais elevado em comparação ao papel.",
  },
  {
    name: "Etiquetas Térmicas",
    description: "Praticidade para logística e pontos de venda.",
    materials: ["Papel térmico sensível ao calor"],
    productUrl: "/products/etiqueta_termica.jpg",
    purpose:
      "Utilizadas em balanças de supermercados, logística, transporte e emissão de tickets.",
    pros: "Impressão rápida e econômica, sem necessidade de ribbon.",
    cons: "Baixa durabilidade, impressão apaga com calor, atrito ou luz solar.",
  },
  {
    name: "Etiquetas Vinil/PVC",
    description: "Alta resistência em ambientes externos e industriais.",
    materials: ["Filme de PVC", "Vinil adesivo"],
    productUrl: "/products/rotulo_vinil_pvc.jpeg",
    purpose:
      "Indicadas para produtos químicos, uso industrial ou rótulos expostos ao tempo.",
    pros: "Muito resistentes, flexíveis e adaptáveis a superfícies irregulares.",
    cons: "Preço mais alto e requer impressão especial.",
  },
  {
    name: "Etiquetas Destrutíveis (Void)",
    description: "Segurança e inviolabilidade para produtos e lacres.",
    materials: ["Filme de segurança VOID", "Casca de ovo"],
    productUrl: "/products/etiqueta_void.png",
    purpose:
      "Usadas em lacres de segurança, eletrônicos e controle de garantia.",
    pros: "Impedem reutilização e garantem inviolabilidade.",
    cons: "Uso restrito a finalidades de segurança.",
  },
  {
    name: "Etiquetas Metalizadas",
    description: "Acabamento sofisticado para produtos premium.",
    materials: ["Poliéster metalizado prata", "Poliéster dourado"],
    productUrl: "/products/rotulo_metalizado.png",
    purpose:
      "Ideais para cosméticos, perfumaria e eletrônicos que exigem sofisticação.",
    pros: "Visual elegante, alta resistência e destaque nas prateleiras.",
    cons: "Requer atenção extra na impressão para manter legibilidade.",
  },
  {
    name: "Etiquetas em Tecido",
    description: "Identidade e conforto para confecções e calçados.",
    materials: ["Nylon", "Cetim", "Poliéster"],
    productUrl: "/products/etiqueta_tecido.jpg",
    purpose: "Aplicadas em roupas, calçados e acessórios de moda.",
    pros: "Flexíveis, resistentes à lavagem e confortáveis no uso.",
    cons: "Geralmente não são adesivas, necessitam costura.",
  },
]

export default Products
