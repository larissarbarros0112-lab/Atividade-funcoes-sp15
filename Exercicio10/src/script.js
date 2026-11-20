function verificarIdade(idade){
    idade = parseInt(window.prompt("Insira sua idade:"));

    if (idade < 18){
        let mensagem = `Você tem ${idade}, então você é menor de idade.`
        return mensagem;
    } else{
        let mensagem = `Você tem ${idade}, então você é maior de idade.`
        return mensagem;
    }
}

console.log(verificarIdade());