// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Solicitando ao usuário que insira o comprimento do lado do triângulo equilátero
var lado = parseFloat(prompt("Digite o comprimento do lado do triângulo equilátero:"));

// Calculando a área do triângulo equilátero usando a fórmula específica
var area = (Math.pow(lado, 2) * Math.sqrt(3)) / 4;

// Exibindo a área do triângulo na tela
console.log("A área do triângulo equilátero com lado", lado, "é:", area);