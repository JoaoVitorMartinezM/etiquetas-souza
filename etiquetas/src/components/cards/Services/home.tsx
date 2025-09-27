import { Service } from "@/app/servicos/services";
import Image from "next/image";


const ServiceHomeCard = ({name, description, icon}: Service) => {
    const Icon = icon
    return (
        <section className="w-60 h-auto bg-white flex flex-col items-center gap-4 py-2 border border-2 border-blue-600 rounded-md">
            {
                typeof icon === "string" ?
                <Image height={100} width={100} alt={`Ícone do serviço ${name}`} src={icon} className="rounded-full"/>
                : <Icon className="inline mx-2 text-5xl" />
            }
            <div className="flex flex-col items-center">
                <span className="text-cyan-800 font-bold">{name}</span>
                <p className="max-w-150 text-sm">{description}</p>
            </div>
        </section>

    )
}

export default ServiceHomeCard