interface Vacancy {
    name: string
    about: string
    activities: string[]
    requirements: string[]
    workload: number
}

export const VACANCIES: Vacancy[] = [
    {
        name: "Desenvolvedor Frontend",
        about: "Contrato temporário para desenvolvimento de um site para a identidade visual da empresa, modalidade PJ e trabalho remoto.",
        activities: [
            "Realizar o desenvolvimento de uma página web",
            "Codificar de forma manutenível.",
            "Trabalhar com NextJS e componentização"
        ],
        requirements: [
            "1 Ano de experiência.",
            "Conhecimento intermediário de NextJS",
            "Já ter feito/participado de algum deploy na carreira",
            "Noções de Linux"
        ],
        workload: 40
    },
    {
        name: "Empacotador",
        about: "Vaga para atuar em supermercado de grande porte, auxiliando no empacotamento de mercadorias e atendimento ao cliente.",
        activities: [
            "Empacotar mercadorias de forma ágil e cuidadosa",
            "Auxiliar clientes no transporte de compras até o veículo",
            "Organizar caixas e materiais no setor",
            "Manter o local de trabalho limpo e organizado"
        ],
        requirements: [
            "Ensino fundamental completo",
            "Boa comunicação e atenção",
            "Capacidade de trabalhar em equipe",
            "Disponibilidade de horário"
        ],
        workload: 44
    },
    {
        name: "Motorista",
        about: "Contratação CLT para transporte de cargas leves e médias dentro da região metropolitana.",
        activities: [
            "Realizar entregas e coletas de mercadorias",
            "Zelar pela conservação do veículo",
            "Cumprir rotas e prazos estabelecidos",
            "Auxiliar na carga e descarga quando necessário"
        ],
        requirements: [
            "CNH categoria B ou superior válida",
            "Experiência prévia como motorista de entrega",
            "Conhecimento básico de rotas na região",
            "Responsabilidade e pontualidade"
        ],
        workload: 44
    },
    {
        name: "Auxiliar de Logística",
        about: "O profissional atuará em centro de distribuição, auxiliando na organização e movimentação de mercadorias.",
        activities: [
            "Recebimento e conferência de produtos",
            "Separação e organização de pedidos",
            "Movimentação de caixas e pallets",
            "Atualização de informações no sistema"
        ],
        requirements: [
            "Ensino médio completo",
            "Desejável experiência em logística/estoque",
            "Noções de informática",
            "Capacidade de trabalho em equipe"
        ],
        workload: 44
    },
    {
        name: "Rebobinador",
        about: "Atuação em indústria gráfica, responsável por operar máquinas de rebobinamento e inspeção de qualidade de bobinas.",
        activities: [
            "Operar e ajustar máquinas de rebobinamento",
            "Controlar qualidade das bobinas produzidas",
            "Identificar e corrigir defeitos de produção",
            "Organizar e embalar bobinas para expedição"
        ],
        requirements: [
            "Ensino médio completo",
            "Experiência prévia com máquinas industriais",
            "Atenção a detalhes e qualidade",
            "Disponibilidade para trabalhar em turnos"
        ],
        workload: 44
    }
]
