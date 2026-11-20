function ehPar(numero){
    numero = parseInt(window.prompt('Insira o número que você gostaria de verificar'));

    if (numero % 2 === 0){
        let mensagem = `O número ${numero} é par!`;

        return mensagem;
    } else {
        mensagem = `O número ${numero} é impar!`;

        return mensagem;
    }
}

console.log(ehPar());