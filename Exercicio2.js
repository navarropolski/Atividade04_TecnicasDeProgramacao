// Chamando a biblioteca "prompt"
const prompt = require("prompt-sync")();

// Solicitando ao usuário que insira seu nome, endereço e telefone
var nome = prompt("Digite seu nome:");
var endereco = prompt("Digite seu endereço:");
var telefone = prompt("Digite seu telefone:");

// Criando uma mensagem com as informações fornecidas pelo usuário
var mensagem = "Nome: " + nome + "\n";
mensagem += "Endereço: " + endereco + "\n";
mensagem += "Telefone: " + telefone;

// Exibindo a mensagem na tela
console.log(mensagem);