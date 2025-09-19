
export interface Comment {
    profileUrl: string
    employee: string
    role: string
    comment: string
    yearsOfCompany: number
}

const TESTIMONIALS: Comment[] = [
    {
        profileUrl: "/felipe-cto.jpeg",
        employee: "Felipe João de Souza",
        role: "Chefe de Operações - COO",
        comment: "Mesmo com tantos anos dentro do mercado, vejo que posso aprender todos os dias com a empresa e nossos colaboradores.",
        yearsOfCompany: 12
    },
    {
        profileUrl: "/ellen-gerente-adm.jpeg",
        employee: "Ellyzhângella Ellenn",
        role: "Chefe Administrativa - CFO",
        comment: "A cada dia que passa me sinto ainda mais capaz de resolver os problemas, por mais complexos e irresolutos que pareçam ser.",
        yearsOfCompany: 12
    },
    {
        profileUrl: "/joao-cto.jpeg",
        employee: "João Vitor Marcelino",
        role: "Chefe de Tecnologia - CTO",
        comment: "Tive a oportunidade de promover a identidade tecnológica da Souza Etiquetas, aprendi muito com isso e estou convicto que ajudarei em novos desafios.",
        yearsOfCompany: 1
    },
    {
        profileUrl: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=200&h=200&fit=crop&crop=faces",
        employee: "Ana Souza",
        role: "Gestora de projetos",
        comment: "Adorei trabalhar nesse projeto, a equipe foi super colaborativa!",
        yearsOfCompany: 2
    },
    {
        profileUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=faces",
        employee: "Carlos Oliveira",
        role: "Rebobinador",
        comment: "Aprendi muito com os desafios que enfrentamos, foi incrível.",
        yearsOfCompany: 1
    },
    {
        profileUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces",
        employee: "Fernanda Lima",
        role: "Gerente financeira",
        comment: "A comunicação e organização foram os pontos mais fortes da equipe.",
        yearsOfCompany: 10
    },
    {
        profileUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop&crop=faces",
        employee: "João Pereira",
        role: "Motorista",
        comment: "Gostei muito da experiência, todos estavam dispostos a ajudar.",
        yearsOfCompany: 5
    },
    {
        profileUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
        employee: "Mariana Costa",
        role: "Sucesso do cliente",
        comment: "Foi ótimo ver como conseguimos entregar com qualidade e no prazo!",
        yearsOfCompany: 2
    }

]

export default TESTIMONIALS