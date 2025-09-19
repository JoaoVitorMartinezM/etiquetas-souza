'use server';

export async function contactAction(formData: FormData) {
	console.log("Dados recebidos:", {
		nome: formData.get("nome"),
		telefone: formData.get("telefone"),
		email: formData.get("email"),
		mensagem: formData.get("mensagem"),
	});
}