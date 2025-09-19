import ServiceCard from "@/components/cards/Services"
import Services from "./services"
import { Title } from "@/components/tophograph/Title"
import { Caption } from "@/components/tophograph/Caption"


const ServicesPage = () => {
    return (
        <div className="flex flex-col gap-4 text-justify items-center mx-auto w-full md:w-2/3 bg-slate-300 my-4 p-4 md:rounded-md">
            <Title text="Serviços Souza" className="text-slate-700 text-4xl font-bold"/>
            <Caption text="Soluções completas para suas etiquetas e rótulos." className="lg:text-md uppercase bg-white/30 p-2 rounded-md text-cyan-800"/>

            {
                Services.map(
                    (service, index) => (
                        <ServiceCard name={service.name} description={service.description} icon={service.icon} sampleUrl={service.sampleUrl} key={index}/>
                    )
                )
            }
            
        </div>
    )
}

export default ServicesPage