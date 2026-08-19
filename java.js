const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    
    event.preventDefault();

    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const momento = document.getElementById("momento").value;
    const mensagem = document.getElementById("mensagem").value;

    
    const dados = {
        nome: nome,
        email: email,
        whatsapp: whatsapp,
        momento: momento,
        mensagem: mensagem
    };

    const nomeCliente = dados.nome;
    const emailCliente = dados.email;

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
    const telefone = "5571999999999";

    // Preparando a mensagem para a URL
    const mensagemFormatada = encodeURIComponent(mensagem);

    // Criando link do WhatsApp
    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    // Abrindo WhatsApp
    window.open(url, "_blank");
});