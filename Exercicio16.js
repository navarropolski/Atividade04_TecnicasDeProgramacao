// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

function converterParaSegundos(horas, minutos, segundos) {
    // Calcula o total de segundos
    let totalSegundos = horas * 3600 + minutos * 60 + segundos;

    return totalSegundos;
}

// Exemplo de uso da função
let horas = 1;
let minutos = 40;
let segundos = 10;

let totalSegundos = converterParaSegundos(horas, minutos, segundos);
console.log("O valor em segundos é: " + totalSegundos + " segundos");
