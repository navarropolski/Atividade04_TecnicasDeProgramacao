// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Solicitando ao usuário que insira o valor do salário-mínimo e a quantidade de quilowatts gastos
var salarioMinimo = parseFloat(prompt("Digite o valor do salário-mínimo:"));
var quilowattsGastos = parseFloat(prompt("Digite a quantidade de quilowatts gastos:"));

// Definindo o valor de 300 quilowatts em relação ao salário-mínimo
var valorPorQuilowatt = salarioMinimo / 6 / 300;

// Calculando o valor a ser pago pela residência
var valorAPagar = valorPorQuilowatt * quilowattsGastos;

// Exibindo o valor a ser pago na tela
console.log("O valor a ser pago pela residência é de R$" + valorAPagar.toFixed(2));
