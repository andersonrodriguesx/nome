const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    // Capturando os valores digitados
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const peso = document.getElementById("peso").value;

    // "Dicionário" do Python -> objeto no JavaScript
    const dados = {
        nome: nome,
        idade: idade,
        peso: peso
    };

    // Pegando os dados do objeto
    const nomeCliente = dados.nome;
    const idadeCliente = dados.idade;

    // Se peso estiver vazio, usamos "Não informado"
    const pesoCliente = dados.peso || "Não informado";

    // Montando a mensagem
    const mensagem = `
Olá!

Nome: ${nomeCliente}
Idade: ${idadeCliente}
Peso: ${pesoCliente}
    `;

    // Número que receberá a mensagem
    const telefone = "55718198-8560";

    // Preparando a mensagem para a URL
    const mensagemFormatada = encodeURIComponent(mensagem);

    // Criando link do WhatsApp
    const url = https: //wa.me/${telefone}?text=${mensagemFormatada};

        // Abrindo WhatsApp
        window.open(url, "_blank");
});