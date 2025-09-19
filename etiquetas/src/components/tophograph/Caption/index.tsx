interface Caption {
    text: string,
    className?: string
}
export const Caption = ({text, className}: Caption) => {
    return (
        <span className={`${className ?? "text-md font-bold text-slate-800"}`}>{text}</span>
    )
}