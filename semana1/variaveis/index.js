// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:
// 1 - Será impresso: 10 5

// 2 - Será impresso: undefined ou algum erro, já que a variável "c" não foi definida em nenhum momento.

// 3 - O programa recebe do usuário a quantidade de horas trabalhadas por dia e o salario diário
// e calcula o valor recebido por hora trabalhada
// Substituir 'p' por 'horasTrabalhadasDia' | substituir 't' por 'salarioRecebidoDia'


// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// NÚMERO 1:

let nome
let idade

console.log(typeof nome, typeof idade)

// foi impresso o tipo 'undefined'. Esse tipo foi impresso devido a falta de atribuição
// de algum valor nas variáveis

nome = prompt("Qual o seu nome")
idade = prompt("Qual a sua idade?")

console.log(typeof nome, typeof idade)

//os tipos foram 'string' para as duas. Notei que os valores inseridos pelo usuário, mesmo estando
// em números, foram reconhecidos como string.

console.log("Olá",nome +", você tem",idade,"anos")

// NÚMERO 2:

let bebeuAgua = "Você bebeu água hoje?"
let arrumouCama = "Você arrumou sua cama hoje?"
let tomouCafe = "Você tomou café hoje?"

let respostaAgua = "- SIM"
let respostaCama = "- NÃO"
let respostaCafe = "- SIM"

console.log(bebeuAgua, respostaAgua)
console.log(arrumouCama, respostaCama)
console.log(tomouCafe, respostaCafe)

// NÚMERO 3:

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

const c = a //criei outra varíavel de valor fixo para guardar o valor de a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO:

let primeiroNumero = prompt("Escreva o primeiro número")
let segundoNumero = prompt("Escreva o segundo número")

let soma = Number(primeiroNumero) + Number(segundoNumero)
let multiplicacao = Number(primeiroNumero) * Number(segundoNumero)

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao)
