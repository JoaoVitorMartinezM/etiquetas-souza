import { ContactForm } from "../_forms/ContactForm"
import { Contact } from "../Contact"

export const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center py-10 bg-linear-to-r from-cyan-500 to-blue-500 max-w-screen">
				<ContactForm />

				<Contact />

			</div>
			<div className="flex items-center justify-around text-black bg-[#ededed] text-xs">
				<span className="p-2">Todos os direitos Reservados.<br className="md:hidden"/><span className="text-emerald-400">© Etiquetas Souza.</span></span>
				<span>Desenvolvido por <br className="md:hidden"/><span className="text-emerald-400">Dev Marcelino.</span></span>
			</div>
		</footer>
	)
}