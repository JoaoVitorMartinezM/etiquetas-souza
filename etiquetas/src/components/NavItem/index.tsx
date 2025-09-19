import Link from "next/link"
import React from "react"

interface NavProps {
    href: string,
    children: React.ReactNode,
}

export const NavItem = ({ href, children }: NavProps) => {
    return (
        <Link href={href} className="flex items-center text-sm text-black font-bold md:text-xl text-(--primary-foreground) rounded-sm hover:bg-gray-700 hover:text-cyan-300 px-4 md:p-2">{children}</Link>
    )
}