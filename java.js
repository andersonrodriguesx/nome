const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    
    event.preventDefault();

    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const momento = document.getElementById("momento").value;
    const mensagem1 = document.getElementById("mensagem").value;

    
    const dados = {
        nome: nome,
        email: email,
        whatsapp: whatsapp,
        momento: momento,
        mensagem1: mensagem1
    };

    const nomeCliente = dados.nome;
    const emailCliente = dados.email;
    const whatsappCliente = dados.whatsapp;
    const momentoCliente = dados.momento;
    const mensagemCliente = dados.mensagem1;

    const mensagem = `
Olá!

Nome: ${nomeCliente}
Email: ${emailCliente}
Whatsapp: ${whatsappCliente}
Momento: ${momentoCliente}
Mensagem: ${mensagemCliente}
    `;

    const telefone = "5571985218376";

    const mensagemFormatada = encodeURIComponent(mensagem);

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    window.open(url, "_blank");
});