function enviar() {
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;
    
    let texto = "Nome: " + nome + "\nE-mail: " + email + "\nAssunto: " + assunto + "\nMensagem: " + mensagem;
    
    alert(texto);
    
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
