document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Aqui você poderia adicionar a lógica para enviar os dados do formulário para o backend, por exemplo
    // No exemplo abaixo, apenas exibimos os dados no console e mostramos uma mensagem de sucesso na página
    console.log('Nome: ' + nome);
    console.log('Email: ' + email);
    console.log('Mensagem: ' + mensagem);

    var status = document.getElementById('status');
    status.innerHTML = 'Mensagem enviada com sucesso!';
    status.style.color = 'green';

    // Limpa o formulário após o envio
    document.getElementById('contactForm').reset();
});
