
export const Title = ({text, className}: {text: string, className?: string}) => {
    return (
        <h1 className={`${className ?? "text-2xl sm:text-4xl md:text-6xl font-bold text-slate-100 p-4"}`}>{text}</h1>
    )
}