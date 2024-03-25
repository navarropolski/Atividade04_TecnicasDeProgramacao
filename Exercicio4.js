// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Solicitando que o usuário digite os três números
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));
var numero3 = parseFloat(prompt("Digite o terceiro número:"));

// Calculo das operações
var soma = numero1 + numero2 + numero3;
var subtracao = numero1 - numero2 - numero3;
var multiplicacao = numero1 * numero2 * numero3;

// Verificando se é possível dividir os números
var divisao;
if (numero2 !== 0 && numero3 !== 0) {
    divisao = numero1 / numero2 / numero3;
} else {
    divisao = "Não é possível realizar a divisão, pelo menos um dos números é zero.";
}

// Exibindo os resultados na tela
console.log("Soma dos números:", soma);
console.log("Subtração dos números:", subtracao);
console.log("Multiplicação dos números:", multiplicacao);
console.log("Divisão dos números:", divisao);