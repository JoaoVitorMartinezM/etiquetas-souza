import { Service } from "@/app/servicos/services";
import Image from "next/image";


const ServiceCard = ({name, description, icon, sampleUrl}: Service) => {
    const Icon = icon
    return (
        <section className="w-80 h-auto md:w-[500px] lg:w-[600px] md:h-32 bg-white flex flex-col md:flex-row items-center gap-4 px-4 py-2 border border-2 border-blue-600 rounded-md">
            {
                typeof icon === "string" ?
                <Image height={100} width={100} alt={`Ícone do serviço ${name}`} src={icon} className="rounded-full"/>
                : <Icon className="inline mx-2 text-5xl" />
            }
            <div className="flex flex-col items-center">
                <span className="text-cyan-800 font-bold">{name}</span>
                <p className="max-w-150 text-sm">{description}</p>
            </div>
            {
                sampleUrl &&
                <Image height={150} width={120} alt={`Ícone do serviço ${name}`} src={sampleUrl} className="hidden rounded-sm md:inline"/>
            }

        </section>

    )
}

export default ServiceCard