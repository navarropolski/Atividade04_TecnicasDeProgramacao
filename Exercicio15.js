// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

function calcularConsumoCombustivel(tempoViagem, velocidadeMedia) {
    // Calcula a distância percorrida (DISTÂNCIA = TEMPO * VELOCIDADE)
    let distanciaPercorrida = tempoViagem * velocidadeMedia;

    // Calcula a quantidade de litros de combustível utilizados (LITROS_USADOS = DISTÂNCIA / 16)
    let litrosUsados = distanciaPercorrida / 16;

    return {
        distanciaPercorrida: distanciaPercorrida,
        litrosUsados: litrosUsados
    };
}

// Exemplo de uso da função
let tempoViagem = 5; // Tempo gasto na viagem em horas
let velocidadeMedia = 80; // Velocidade média durante a viagem em km/h
let resultado = calcularConsumoCombustivel(tempoViagem, velocidadeMedia);
console.log("Distância percorrida: " + resultado.distanciaPercorrida.toFixed(2) + " km");
console.log("Litros de combustível utilizados: " + resultado.litrosUsados.toFixed(2) + " litros");