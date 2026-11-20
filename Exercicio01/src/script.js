function saudacao(nome) {
     nome = window.prompt("Insira seu nome:");
    
     let mensagem = `Olá, ${nome}! Bem-vindo(a) à aula!`;

     return mensagem;

}

console.log(saudacao());