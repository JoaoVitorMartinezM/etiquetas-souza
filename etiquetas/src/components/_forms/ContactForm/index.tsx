import { contactAction } from "@/actions/contactActions"
import { FormGroup } from "../FormGroup"

export const ContactForm = () => {

	return (
			<form action={contactAction} className="flex flex-col text-emerald-300 text-xs space-y-4 font-bold md:items-end w-full px-4">
				<h2 className="text-lg lg:text-3xl md:text-center">Entre em Contato</h2>
				<FormGroup id="nome" label="Nome" placeholder="Digite seu nome" />
				<FormGroup id="telefone" label="Telefone" placeholder="(48) 9-8888-0000" type="tel" />
				<FormGroup id="email" label="E-mail" placeholder="joao@gmail.com" type="email" />
				<FormGroup id="mensagem" label="Mensagem" placeholder="Digite sua dúvida aqui..." />
				<button type="submit" className="text-white bg-cyan-500 w-25 py-2 rounded-sm self-end">Enviar</button>
			</form>
	)
}