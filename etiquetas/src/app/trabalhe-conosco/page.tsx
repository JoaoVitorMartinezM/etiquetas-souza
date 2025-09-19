import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { VACANCIES } from "./vacancies";


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Subtitle from "@/components/tophograph/Subtitle";
import TESTIMONIALS from "./testimonials";
import TestimonialsCard from "@/components/cards/Testimonials";
import Benefits from "@/components/cards/Benefits";
import { BENEFITS } from "./benefits";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function CarreersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex p-4 md:px-80 items-center al h-[300px] bg-[url(/banner-trabalhe-conosco.jpg)] bg-top md:bg-center">
        <h1 className="text-6xl text-white font-bold">Trabalhe conosco</h1>
      </div>
      <section className="flex flex-col gap-2 md:flex-row items-center justify-between lg:justify-end-safe">
        <div className="w-full lg:w-1/3 mx-auto text-justify p-2">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-slate-900 font-extrabold p-2">Venha fazer parte da nossa história.</h2>
          <p>Venha evoluir conosco, a Souza Etiquetas tem mais de 10 anos de experiência no mercado de gráficas. Formando mais que profissionais, formando uma família com um único compromisso, <span className="text-slate-900 font-extrabold">Evolução</span>.</p>
        </div>
        <Image width={800} height={150} src={'/galpao.jpg'} alt="Foto da empresa Souza Etiquetas" className="w-[500px] xl:w-auto rounded-xs md:rounded-sm lg:rounded-s-md" />
      </section>
      <section className="flex flex-col gap-4 p-4">
        <div className="w-full text-center">
          <Subtitle title="Benefício que oferecemos" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {
            BENEFITS.map(
              (benefit, index) => (
                <Benefits icon={benefit.iconElement} text={benefit.name} key={index} />
              )
            )
          }
        </div>
      </section>
      <section className="w-full md:w-4/5 flex flex-col items-center mx-auto gap-4 p-4">
        <h2 className="text-2xl text-slate-900 font-extrabold">Conheça nossas vagas!</h2>
        <div className="flex flex-wrap justify-center gap-4 mx-auto w-full md:w-auto p-4 bg-blue-950 lg:rounded-2xl rounded-md">
          <Carousel className="w-full max-w-xs md:hidden">
            <CarouselContent>
              {VACANCIES.map((element, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card key={index} className="min-h-[300px] max-h-[300px] border-cyan-500 border-2">
                      <CardHeader>
                        <CardTitle>{element.name}</CardTitle>
                        <CardDescription>{element.requirements[0]}</CardDescription>
                        <CardAction>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="link">
                                Ver Detalhes
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] lg:max-w-[800px]">
                              <DialogHeader>
                                <DialogTitle>{element.name}</DialogTitle>
                                <DialogDescription>
                                  {element.about}
                                </DialogDescription>
                                <span>Carga horária: {element.workload}</span>
                              </DialogHeader>
                              <div className="grid gap-4">
                                <div className="grid gap-3">
                                  <h2 className="text-xl">Atividades</h2>
                                  <ul className="list-disc ml-6">

                                    {
                                      element.activities.map(
                                        (item, index) => (
                                          <li key={index}>{item}</li>
                                        )
                                      )
                                    }
                                  </ul>
                                </div>
                                <div className="grid gap-3">
                                  <h2 className="text-xl">Requisitos</h2>
                                  <ul className="list-disc ml-6">
                                    {
                                      element.requirements.map(
                                        (item, index) => (
                                          <li key={index}>{item}</li>
                                        )
                                      )
                                    }
                                  </ul>
                                </div>
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Fechar</Button>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>


                        </CardAction>
                      </CardHeader>
                      <CardContent>
                        <p>{element.about}</p>
                      </CardContent>
                      <CardFooter>
                        <p>Carga Horária: {element.workload} horas</p>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6"/>
            <CarouselNext className="-right-4"/>
          </Carousel>
          {VACANCIES.map((element, index) => (
            <Card key={index} className="w-[350px] border-cyan-500 border-2 hidden md:inline">
              <CardHeader>
                <CardTitle>{element.name}</CardTitle>
                <CardDescription>{element.requirements[0]}</CardDescription>
                <CardAction>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link">
                        Ver Detalhes
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] lg:max-w-[800px]">
                      <DialogHeader>
                        <DialogTitle>{element.name}</DialogTitle>
                        <DialogDescription>
                          {element.about}
                        </DialogDescription>
                        <span>Carga horária: {element.workload}</span>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <h2 className="text-xl">Atividades</h2>
                          <ul className="list-disc ml-6">

                            {
                              element.activities.map(
                                (item, index) => (
                                  <li key={index}>{item}</li>
                                )
                              )
                            }
                          </ul>
                        </div>
                        <div className="grid gap-3">
                          <h2 className="text-xl">Requisitos</h2>
                          <ul className="list-disc ml-6">
                            {
                              element.requirements.map(
                                (item, index) => (
                                  <li key={index}>{item}</li>
                                )
                              )
                            }
                          </ul>
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Fechar</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>


                </CardAction>
              </CardHeader>
              <CardContent>
                <p>{element.about}</p>
              </CardContent>
              <CardFooter>
                <p>Carga Horária: {element.workload} horas</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="w-full md:w-4/5 flex flex-wrap items-center mx-auto bg-black/10 border border-black/20
      backdrop-blur-lg shadow-xl md:rounded-2xl gap-4 p-4 mb-4">
        <div className="w-full text-center">
          <Subtitle title="Depoimentos dos nossos colaboradores" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mx-auto w-auto p-2">
          <Carousel className="w-full max-w-xs md:hidden self-center">
            <CarouselContent>
              {
                TESTIMONIALS.map(
                  (comment, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <TestimonialsCard
                          comment={comment.comment}
                          employee={comment.employee}
                          profileUrl={comment.profileUrl}
                          role={comment.role}
                          yearsOfCompany={comment.yearsOfCompany}
                          key={index} />
                      </div>
                    </CarouselItem>
                  ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6"/>
            <CarouselNext className="-right-2"/>
          </Carousel>
          {
            TESTIMONIALS.map(
              (comment, index) => (
                <div key={index} className="hidden md:block">
                  <TestimonialsCard
                    comment={comment.comment}
                    employee={comment.employee}
                    profileUrl={comment.profileUrl}
                    role={comment.role}
                    yearsOfCompany={comment.yearsOfCompany}
                  />
                </div>
              )
            )
          }
        </div>

      </section>


    </div>
  );
}