// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Definindo o valor de PI como uma constante
const PI = 3.1415;

// Solicitando ao usuário que insira o raio do círculo
var raio = parseFloat(prompt("Digite o valor do raio do círculo:"));

// Calculando a área do círculo usando a fórmula Área = π * raio^2
var area = PI * Math.pow(raio, 2);

// Exibindo a área do círculo na tela
console.log("A área do círculo com raio", raio, "é:", area);