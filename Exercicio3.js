// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Solicitando ao usuário que insira os valores das variáveis a, b e c
var a = parseFloat(prompt("Digite o valor de a:"));
var b = parseFloat(prompt("Digite o valor de b:"));
var c = parseFloat(prompt("Digite o valor de c:"));

// Calculando o resultado da fórmula d = a + c - b
var d = a + c - b;

// Exibindo o resultado na tela
console.log("O resultado da fórmula d = a + c - b é:", d);