function calcularDesconto(preco, percentual){
    preco = parseFloat(window.prompt("Insira o valor do produto"));
    percentual = parseFloat(window.prompt("Insira a porcentagem do desconto (ex: 10% de desconto: 10)"));

    let porcentagem = percentual / 100;

    let desconto = preco * porcentagem;

    let valorFinal = preco - desconto;

    return valorFinal;
}

console.log(calcularDesconto());