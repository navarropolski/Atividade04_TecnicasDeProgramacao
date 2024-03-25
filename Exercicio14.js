// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

function calcularDesconto(precoOriginal, valorDesconto) {
    // Verifica se o preço e o desconto são números positivos
    if (precoOriginal <= 0 || valorDesconto < 0) {
        return "O preço original deve ser um número positivo e o valor do desconto não pode ser negativo.";
    }

    // Calcula o percentual de desconto
    let percentualDesconto = (valorDesconto / precoOriginal) * 100;

    // Calcula o preço com desconto
    let precoComDesconto = precoOriginal - valorDesconto;

    return {
        precoOriginal: precoOriginal,
        percentualDesconto: percentualDesconto.toFixed(2), // Arredonda para 2 casas decimais
        valorDesconto: valorDesconto,
        precoComDesconto: precoComDesconto
    };
}

// Exemplo de uso da função
let precoOriginal = 100; // Preço original do produto
let valorDesconto = 20; // Valor do desconto
let resultado = calcularDesconto(precoOriginal, valorDesconto);
console.log("Preço original: R$" + resultado.precoOriginal.toFixed(2)); // Arredonda para 2 casas decimais
console.log("Percentual de desconto: " + resultado.percentualDesconto + "%");
console.log("Valor do desconto: R$" + resultado.valorDesconto.toFixed(2)); // Arredonda para 2 casas decimais
console.log("Preço com desconto: R$" + resultado.precoComDesconto.toFixed(2)); // Arredonda para 2 casas decimais