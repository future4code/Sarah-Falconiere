// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// NÚMERO 1:

// a) 10 / 50
// b) Não apareceria nenhuma mensagem, pois dentro da função não existe o comando console.log que faça
// a impressão da mensagem no console.

// NÚMERO 2:

// a) Essa função recebe um texto qualquer, coloca todas as letras do texto minúsculas e busca
// a palavra "cenoura", retornando um booleano true ou false.
// b) i. true
// ii. true
// iii. true


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// NÚMERO 1:

function informacoesPessoaisSarah() {
    console.log("Eu sou Sarah, tenho 25 anos, moro em Minas Gerais e sou estudante")
}

function infosPessoais(nome, idade, endereco, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereco} e sou ${profissao}`)
}
const nomeUsuario = prompt("Escreva seu nome")
const idadeUsuario = prompt("Escreva sua idade")
const enderecoUsuario = prompt("Escreva em qual estado voce mora")
const profissaoUsuario = prompt("Escreva sua profissao")

infosPessoais(nomeUsuario, idadeUsuario, enderecoUsuario, profissaoUsuario)

// NÚMERO 2:

// LETRA A

const soma = (primeiroParametro, segundoParametro) => {
    return primeiroParametro + segundoParametro;
}
console.log("Esse é o resultado da soma dos números escondidos que eu coloquei :" 
    , soma(2,3))

// LETRA B:

const comparaNumeros = (numero1, numero2) => {
    comparador = numero1 >= numero2
    return comparador
}
console.log("O primeiro é maior que o segundo?", comparaNumeros(5,7))

// LETRA C:

function parOuImpar(numero) {
    resultado = numero % 2 === 0
    return resultado
}

console.log("O número é par?", parOuImpar(49))

// LETRA D:

const propriedadesDaMensagem = function(mensagem) {
    msgMaiuscula = mensagem.toUpperCase()
    console.log(msgMaiuscula, mensagem.length)
}
propriedadesDaMensagem("Oi, meu nome é Sarah")

// NÚMERO 3:

function operacoesMatematicas(num1, num2) {
    soma = Number(num1) + Number(num2)
    subtrai = num1 - num2
    multiplica = num1 * num2
    divide = num1 / num2
    console.log (`Números inseridos: ${num1} e ${num2}
    Soma: ${soma}
    Diferença: ${subtrai}
    Multiplicação: ${multiplica}
    Divisão: ${divide}`)
}

const numero1Usuario = prompt("Digite o primeiro número")
const numero2Usuario = prompt("Digite o segundo número")

operacoesMatematicas(numero1Usuario, numero2Usuario)


// DESAFIOS:

// NÚMERO 1:

// const imprimeNoConsole = parametro => {
//     console.log(parametro)
// }

// const somaDeValores = (num1, num2) => {
//     soma = Number(num1) + Number(num2)
//     return soma
// }

// imprimeNoConsole(somaDeValores(30,3))

// NÚMERO 2:

// const teoremaPitagoras = (cat1, cat2) => {
//     hipotenusa = Math.sqrt((Math.pow(cat1,2) + Math.pow(cat2, 2)))
//     console.log("O valor da hipotenusa é:", hipotenusa)
// }

// let num1Usuario = prompt("Escreva o valor do primeiro cateto")
// let num2Usuario = prompt("Escreva o valor do segundo cateto")

// teoremaPitagoras(num1Usuario, num2Usuario)