function areaRetangulo(base,altura){
    base = parseFloat(window.prompt("Insira a base do retangulo"));
    altura = parseFloat(window.prompt("Insira a altura do retangulo"));

    let area = base * altura;

    let mensagem = `A área de um retângulo de base ${base} e altura ${altura} é ${area}.`;

    return mensagem;
}

console.log(areaRetangulo());