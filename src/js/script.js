// Objetivo:
// Enviar um texto de um formulário para uma API do n8n e exibir o resultado o código html, css e colocar a animação no fundo da tela do site.

// Passos:
// 1. No JavaScript, pegar o evento de submit do formulário para evitar o recarregamento da página.
// 2. Obter o valor digitado pelo usuário no campo de texto.
// 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
// 4. Fazer uma requisição HTTP (POST) para a API do n8n, enviando o texto do formulário no corpo da requisição em formato JSON.
// 5. Receber a resposta da API do n8n (esperando um JSON com o código HTML/CSS do background).
// 6. Se a resposta for válida, exibir o código HTML/CSS retornado na tela:
//    - Mostrar o HTML gerado em uma área de preview.
//    - Inserir o CSS retornado dinamicamente na página para aplicar o background.
// 7. Remover o indicador de carregamento após o recebimento da resposta.

function setLoading(isLoading) {
	const btnText = document.getElementById("bnt-text"); // Corrigido: "bnt-text" em vez de "generate-btn"

	if (isLoading) {
		btnText.innerHTML = "Gerando Background...";
	} else {
		btnText.innerHTML = "Gerar Background Mágico";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const generateBtn = document.getElementById("generate-bnt"); // Corrigido: "generate-bnt" em vez de form
	const textArea = document.getElementById("Description"); // Corrigido: "Description" com D maiúsculo
	const htmlCode = document.getElementById("html-code");
	const cssCode = document.getElementById("css-code");
	const preview = document.getElementById("preview-section");

	generateBtn.addEventListener("click", async function (event) { // Alterado: "click" em vez de "submit"
		event.preventDefault();

		// 2. Obter o valor digitado pelo usuário no campo de texto.
		const description = textArea.value.trim();

		if (!description) {
			return;
		}

		// 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
		setLoading(true);

		try {
			// Mantenha este trecho comentado até ter a URL do n8n
			/*const response = await fetch("sua-url-do-n8n-aqui", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ description }),
			});*/

			// ...existing code...

		} catch (error) {
			console.error("Erro ao gerar o fundo:", error);
			htmlCode.textContent = "Não consegui gerar o código HTML, tente novamente";
			cssCode.textContent = "Não consegui gerar o código CSS, tente novamente";
			preview.innerHTML = "";
		} finally {
			setLoading(false);
		}
	});
});
