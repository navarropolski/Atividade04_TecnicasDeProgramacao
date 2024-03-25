// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Solicito ao usuário que insira um número e armazeno na variável 'numero'
var numero = prompt("Digite um número:");

// Convertendo o valor inserido pelo usuário para um número de ponto flutuante usando parseFloat()
// Isso é necessário porque o valor retornado pelo prompt é sempre uma string
numero = parseFloat(numero);

// Verifica-se o valor inserido é um número válido
if (!isNaN(numero)) {
    // Calcula-se a metade do número inserido dividindo por 2 e armazene na variável 'metade'
    var metade = numero / 2;

    // Exibe a metade do número para o usuário
    console.log("A metade de " + numero + " é: " + metade);
} else {
    // Se o valor inserido não for um número válido, exibe uma mensagem de erro
    console.log("Por favor, insira um número válido.");
}