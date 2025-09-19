import React from "react";
import { IconType } from "react-icons";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Benefits = ({icon, text}: {icon: IconType, text: string}) => {
    const Icon = icon
    return (
        <Card className="max-w-[160px] min-w-[160px]">
            <CardHeader>
                <CardTitle className="text-5xl">
                    <Icon />
                </CardTitle>
            </CardHeader>
            <CardContent>
                {text}
            </CardContent>
        </Card>
    )
}

export default Benefits