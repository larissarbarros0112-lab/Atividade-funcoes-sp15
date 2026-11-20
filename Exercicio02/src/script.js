function dobro(numero){
    numero = window.prompt(`Insira o número em que você quer dobrar:`);

    let multiplicacao = numero * 2;

    let mensagem = `O dobro do número ${numero} é ${multiplicacao}.`;

    return mensagem;
}

console.log(dobro());