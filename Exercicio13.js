// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

function calcularRendimento(saldo) {
    // Verifica se o saldo é positivo
    if (saldo <= 0) {
        return "O saldo deve ser um número positivo.";
    }

    // Define a taxa de rendimento (11%)
    let taxaRendimento = 0.11;

    // Calcula o rendimento
    let rendimento = saldo * taxaRendimento;

    return rendimento;
}

// Exemplo de uso da função
let saldoAplicacao = 1000; // Valor do saldo da aplicação
let rendimento = calcularRendimento(saldoAplicacao);
console.log("O rendimento da aplicação é: " + rendimento.toFixed(2)); // Arredonda o resultado para 2 casas decimais
