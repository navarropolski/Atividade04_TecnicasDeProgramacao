// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Solicitando ao usuário que insira o valor em segundos
var segundosTotal = parseInt(prompt("Digite a quantidade de segundos:"));

// Calculando as horas, minutos e segundos
var horas = Math.floor(segundosTotal / 3600);
var minutos = Math.floor((segundosTotal % 3600) / 60);
var segundos = segundosTotal % 60;

// Exibindo o resultado na tela
console.log(segundosTotal + " segundos são " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos.");
