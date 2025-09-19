import { Comment } from "@/app/trabalhe-conosco/testimonials"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

const TestimonialsCard = ({profileUrl, employee, role, comment, yearsOfCompany}: Comment) => {
    return (
        <Card className="max-w-[300px] min-h-[500px] max-h-[500px] border-cyan-500 border-2">
            <CardHeader className="flex flex-col items-center">
                <Image alt={`Imagem da colaboradora ${employee}`} src={profileUrl} width={200} height={200}
                className="rounded-full max-w-[200px] max-h-[200px]"/>
                <CardTitle>{employee}</CardTitle>
                <CardDescription>{role}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{comment}</p>
            </CardContent>
            <CardFooter>
                <p>Tempo de casa: {yearsOfCompany} ano{yearsOfCompany>1 && "s"}</p>
            </CardFooter>
        </Card>

    )
}

export default TestimonialsCard