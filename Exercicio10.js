// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Array contendo a quantidade diária de chuva em polegadas para segunda a sexta-feira
var chuvaDiariaPolegadas = [0.5, 0.3, 0.6, 0.4, 0.7];

// Função para calcular a quantidade total de chuva da semana em milímetros
function calcularChuvaSemanaEmMilimetros(chuvaDiariaPolegadas) {
    // Somando as quantidades diárias de chuva em polegadas
    var chuvaTotalPolegadas = chuvaDiariaPolegadas.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual;
    }, 0);

    // Convertendo a quantidade total de chuva em polegadas para milímetros
    var chuvaTotalMilimetros = chuvaTotalPolegadas * 25.4;

    return chuvaTotalMilimetros;
}

// Chamando a função e armazenando o resultado em uma variável
var chuvaTotalMilimetros = calcularChuvaSemanaEmMilimetros(chuvaDiariaPolegadas);

// Exibindo o resultado na tela
console.log("A quantidade total de chuva da semana em milímetros é:", chuvaTotalMilimetros.toFixed(2), "mm");
