function maiorDeDois(a,b) {
    a = parseInt(window.prompt("Insira o primeiro valor:"));

    b = parseInt(window.prompt("Insira o segundo valor:"));

    if (a > b){
        let mensagem = `O número ${a} é maior que ${b}.`;

        return mensagem;
    } else if ( a < b){
        mensagem = `O número ${a} é menor que ${b}. `;
        
        return mensagem;
    } else{
        mensagem = `O número ${a} é igual ao número ${b}.`;

        return mensagem;
    }
}

console.log(maiorDeDois());