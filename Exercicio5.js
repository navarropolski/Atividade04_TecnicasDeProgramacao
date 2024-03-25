// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Solicitando ao usuário que insira a base e a altura do triângulo
var base = parseFloat(prompt("Digite o valor da base do triângulo:"));
var altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));

// Calculando a área do triângulo usando a fórmula área = (base * altura) / 2
var area = (base * altura) / 2;

// Mostrando a área do triângulo na tela
console.log("A área do triângulo com base", base, "e altura", altura, "é:", area);