// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

function inverterNumero(numero) {
    // Verifica se o número tem três dígitos
    if (numero < 100 || numero > 999) {
        return "O número deve ter três dígitos.";
    }

    // Extrai os dígitos do número
    let centena = Math.floor(numero / 100);
    let resto = numero % 100;
    let dezena = Math.floor(resto / 10);
    let unidade = resto % 10;

    // Inverte os dígitos e forma o número invertido
    let numeroInvertido = unidade * 100 + dezena * 10 + centena;

    return numeroInvertido;
}

// Exemplo de uso da função
let numero = 123;
let numeroInvertido = inverterNumero(numero);
console.log("O número invertido é: " + numeroInvertido);