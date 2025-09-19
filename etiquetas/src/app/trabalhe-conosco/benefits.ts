import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { ImGrin } from "react-icons/im";
import { FaHeartbeat, FaHandHoldingHeart, FaBirthdayCake  } from "react-icons/fa";
import { IconType } from "react-icons";


interface Benefit {
    name: string
    iconElement: IconType
}
export const BENEFITS: Benefit[] = [
    {
        name:"Vale Alimentação 30 reais/dia",
        iconElement: RiMoneyDollarCircleFill
    },
    {
        name:"Banco de horas",
        iconElement: ImGrin
    },
    {
        name:"Plano de saúde",
        iconElement: FaHeartbeat
    },
    {
        name:"Seguro de vida",
        iconElement: FaHandHoldingHeart
    },
    {
        name:"Day-off",
        iconElement: FaBirthdayCake
    },
]

