// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

function calcularMedia(nota1, nota2, nota3, nota4) {
    // Verifica se as notas estão dentro de 0 a 10
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
        return "As notas devem estar no intervalo de 0 a 10.";
    }

    // Calcula a média das quatro notas
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}

// Exemplo de uso da função
let nota1 = 7.5;
let nota2 = 8;
let nota3 = 6.5;
let nota4 = 9;

let mediaFinal = calcularMedia(nota1, nota2, nota3, nota4);
console.log("A média do aluno é: " + mediaFinal);