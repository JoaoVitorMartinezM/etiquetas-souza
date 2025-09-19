
interface FormGroupProps {
    id: string,
    label: string,
    placeholder?: string,
    type?: string

}

export const FormGroup = (props: FormGroupProps) => {

    return (
        <div className="w-full">
            <label htmlFor={props.id} className="block">{props.label}</label>
            <input 
            type={props?.type || "text"} 
            id={props.id} 
            placeholder={props?.placeholder} 
            name={props.id}
            className="bg-[#ededed] text-black px-1 py-2 rounded-lg border-2 border-emerald-300 shadow-xl w-full"
            />
        </div>
    )

}