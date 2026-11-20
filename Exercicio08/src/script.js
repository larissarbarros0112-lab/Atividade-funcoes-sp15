function celsiusParaFahrenheit(c){
    c = parseFloat(window.prompt("Insira a temperatur em graus Celsius:"));

    let f = (c * 1.8) + 32;

    let conversao = `${c}°C convertido para Farenheit é: ${f}°F.`;
    
    return conversao;
}

console.log(celsiusParaFahrenheit());