import ServiceHomeCard from "@/components/cards/Services/home";
import { Caption } from "@/components/tophograph/Caption";
import Subtitle from "@/components/tophograph/Subtitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-auto">
      <div className="flex p-4 md:px-80 items-end justify-center al h-[400px] bg-[url(/imagem-principal-home.png)] bg-top md:bg-center">
        <Link href={"/servicos"}>
          <Button className="mb-28 bg-orange-500 font-bold">Conheça Nossos Serviços!</Button>
        </Link>
      </div>
      <section>
        
      </section>

      <section className="flex justify-around items-center flex-wrap bg-slate-200 py-8">
        <div className="flex flex-col items-start my-8 w-1/4">
          <Subtitle title="Serviços" />
          <Caption text="Nós temos 12 anos de excelência, estamos prontos para atender a sua necessidade." />
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <ServiceHomeCard name="Etiquetas Especiais" description="Etiquetas personalizadas" icon={'/icone-etiqueta-premium.png'} />
          <ServiceHomeCard name="Agilidade" description="Entrega Rápida" icon={'/icone-agilidade.png'} />
          <ServiceHomeCard name="Alta Demanda" description="Entregamos independente do volume" icon={'/icone-alto-volume.png'} />
          <ServiceHomeCard name="Qualidade" description="Impressões de alta definição" icon={'/icone-impressao.png'} />
        </div>
        {/* <Image alt="Máquina de etiquetas"  src='/maquina.webp' width={400} height={200}/> */}
      </section>
      <section className="flex flex-col items-start my-8 gap-4 w-1/2 mx-auto">
        <Subtitle title="Produtos em Destaque" />
        <div className="flex justify-around items-center w-full">
          <Link href={"/produtos"}>
            <Image alt="Etiquetas para alimentos" src='/products/rotulo_alimenticio.png' width={200} height={300} className="rounded-full" />
            <div className="text-center">
              <Caption text="Rótulos alimentícios." />
            </div>
          </Link>
          <Link href={"/produtos"}>
            <Image alt="Etiquetas BOPP" src='/products/rotulo_bopp.webp' width={200} height={300} className="rounded-full" />
            <div className="text-center">
              <Caption text="Etiquetas BOPP." />
            </div>
          </Link>
          <Link href={"/produtos"}>
            <Image alt="Etiquetas metalizadas" src='/products/rotulo-metalizado.jpg' width={200} height={300} className="rounded-full" />
            <div className="text-center">
              <Caption text="Etiquetas Metalizadas." />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
