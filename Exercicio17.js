// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

function calcularRendimentos(valorAplicado, percentualLucro) {
    // Verifica se o valor aplicado e o percentual de lucro são números positivos
    if (valorAplicado <= 0 || percentualLucro < 0) {
        return "O valor aplicado deve ser um número positivo e o percentual de lucro não pode ser negativo.";
    }

    // Calcula o valor do rendimento
    let rendimento = (valorAplicado * percentualLucro) / 100;

    return rendimento;
}

// Exemplo de uso da função
let  valorAplicado = 1000; // Valor aplicado
let  percentualLucro = 5; // Percentual de lucro (5%)
let  rendimento = calcularRendimentos(valorAplicado, percentualLucro);
console.log("O rendimento é: R$" + rendimento.toFixed(2)); // Arredonda para 2 casas decimais