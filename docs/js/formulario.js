function enviar() {
    // Obter os valores inseridos pelo usuário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
    
    // Criar um texto com as seleções do usuário
    var texto = "Nome: " + nome + "\nE-mail: " + email + "\nAssunto: " + assunto + "\nMensagem: " + mensagem;
    
    // Exibir o texto na janela de alerta
    alert(texto);
    
    // Alterar as cores com base nas seleções do usuário
    if (assunto == "duvida") {
        document.body.style.backgroundColor = "#ff0000";
        document.body.style.color = "#000000";
    } else if (assunto == "sugestao") {
        document.body.style.backgroundColor = "#00db04";
        document.body.style.color = "#000000";
    } else if (assunto == "outros") {
        document.body.style.backgroundColor = "#ca0086";
        document.body.style.color = "#FFFFFF";
    }
}