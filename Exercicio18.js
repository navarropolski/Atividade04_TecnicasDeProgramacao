// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Solicitar ao usuário para inserir um número inteiro positivo
let numero = parseInt(prompt("Insira um número inteiro positivo:"));

// Verificar se o número é um inteiro positivo
if (numero > 0 && Number.isInteger(numero)) {
    // Calcular o quadrado
    let quadrado = numero * numero;

    // Calcular a raiz quadrada do número
    let raizQuadrada = Math.sqrt(numero);

    // Exibir os resultados
    console.log("O quadrado de " + numero + " é: " + quadrado);
    console.log("A raiz quadrada de " + numero + " é: " + raizQuadrada);
} else {
    console.log("Por favor, insira um número inteiro positivo válido.");
}
