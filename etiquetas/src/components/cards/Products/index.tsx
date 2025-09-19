import { Product } from "@/app/produtos/products"
import Image from "next/image"
import { Button } from "@/components/ui/button"
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
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ProductsCard = ({ name, description, materials, productUrl, purpose, pros, cons }: Product) => {
    return (
        <Card className="flex flex-col justify-between w-92 sm:w-1/3 md:w-1/4 lg:w-1/5 md:max-h-120 md:min-h-120 bg-sky-100">
            <div>
                <CardHeader className="flex flex-col items-center gap-4 md:text-xl mb-4">
                    <div className="h-[200px] w-full flex justify-center items-center">
                        <Image height={150} width={300} src={productUrl} alt={`Imagem do produto ${name}`} className="md:object-contain w-52 md:max-h-full rounded mb-2" />
                    </div>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm md:text-md xl:text-lg">
                    <p>{description}</p>
                </CardContent>
            </div>
            <CardAction className="flex justify-end w-full p-4">
                <Dialog >
                    <DialogTrigger asChild>
                        <Button variant="outline" className="font-bold text-sm md:text-md xl:text-lg">
                            Ver Detalhes
                        </Button>

                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px] lg:max-w-[800px]">
                        <DialogHeader>
                            <DialogTitle>{name}</DialogTitle>
                            <DialogDescription>
                                {description}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-3">
                            <h2 className="text-lg font-bold">Descrição do Produto</h2>
                            <p>{purpose}</p>
                            <h2 className="text-lg font-bold">Prós</h2>
                            <p>{pros}</p>
                            <h2 className="text-lg font-bold">Contras</h2>
                            <p>{cons}</p>
                            <h2 className="text-lg font-bold">Materiais</h2>
                            <ul className="list-disc ml-6">

                                {
                                    materials.map(
                                        (item, index) => (
                                            <li key={index}>{item}</li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline" className="bg-slate-200 text-sm md:text-md xl:text-lg">Fechar</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardAction >
        </Card>
    )
}

export default ProductsCard