// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// NÚMERO 1:

// a) O código pede um número ao usuário e verifica se ele é par ou ímpar, verificando se o resto da divisão
// por 2 é igual a zero.O

// b) Os números em que a divisão por dois nao resta nada, ou seja, números pares.

// c) Para os números ímpares.


// NÚMERO 2:

// a) O código serve para consultar o preço de uma fruta.

// b) Será impresso: O preço da fruta Maça é R$ 2.25

// c) Seria impresso: O preço da fruta Pêra é R$ 5 (o preço do default)


// NÚMERO 3:

// a) Está pedindo um número ai usuário

// b) "Esse número passou no teste". Nada será impresso se for inserido o -10.

// c) Sim, pois a variável 'mensagem' foi definida no escopo local, e nao global. Sendo assim, ela nao pode ser acessada
// pelo escobo global. O console apresentará um erro indicado que a variável 'mensagem' é undefined.


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// NÚMERO 1:

// const idadeUsuario = Number(prompt("Qual a sua idade?"))

// if (idadeUsuario > 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

// NÚMERO 2:

// const turnoUsuario = prompt("Digite o turno que você estuda. M (matutino, V (vespertino) ou N (noturno)")

// if (turnoUsuario === "M") {
//     console.log("Bom Dia!")
// } else if (turnoUsuario === "V") {
//     console.log("Boa Tarde!")
// } else if (turnoUsuario === "N") {
//     console.log("Boa Noite!")
// }


// NÚMERO 3:

// const turnoUsuario = prompt("Digite o turno que você estuda. M (matutino, V (vespertino) ou N (noturno)")

// switch (turnoUsuario) {
//     case 'M':
//         console.log("Bom Dia!")
//         break
//     case 'V':
//         console.log("Boa Tarde!")
//         break
//     case 'N':
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Turno não encontrado")
//         break
// }


// NÚMERO 4:

// const generoFilme = prompt("Digite o gênero do filme que você irá assistir")
// const precoIngresso = Number(prompt("Digite o preço do ingresso desse filme"))

// if ((generoFilme === "fantasia") && (precoIngresso < 15)) {
//         console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// } 


// DESAFIOS:

// NÚMERO 1:

// const generoFilme = prompt("Digite o gênero do filme que você irá assistir")
// const precoIngresso = Number(prompt("Digite o preço do ingresso desse filme"))

// if ((generoFilme === "fantasia") && (precoIngresso < 15)) {
//         console.log("Bom filme!")
//         const lanche = prompt("Qual lanche voce vai comprar?")
//         console.log(`Aproveite o seu ${lanche}`)
// } else {
//     console.log("Escolha outro filme :(")
// } 


// NÚMERO 2:

// const dolar = 4.1
// const nomeUsuario = prompt("Digite seu nome completo")
// const tipoDoJogo = prompt("Informe se o jogo é internacional (IN) ou doméstico (DO)")
// const etapaDoJogo = prompt("Indiquei o tipo do jogo: SF (semi-final), DT (decisão de terceiro lugar) e FI (final)")
// const categoriaJogo = prompt("Indique a categoria do jogo (1, 2, 3 ou 4)")
// const quantidadeIngressos = Number(prompt("Digite a quantidade de ingressos que você deseja comprar"))
// let precoUnitarioDomestico



// if (etapaDoJogo === "SF") {
//     switch (categoriaJogo) {
//         case '1':
//             precoUnitarioDomestico = 1320
//             break
//         case '2':
//             precoUnitarioDomestico = 880
//             break
//         case '3':
//             precoUnitarioDomestico = 550
//             break
//         case '4':
//             precoUnitarioDomestico = 220
//             break
//     }
// } else if (etapaDoJogo === "DT") {
//     switch (categoriaJogo) {
//         case '1':
//             precoUnitarioDomestico = 660
//             break
//         case '2':
//             precoUnitarioDomestico = 440
//             break
//         case '3':
//             precoUnitarioDomestico = 330
//             break
//         case '4':
//             precoUnitarioDomestico = 170
//             break
//     }
// } else if (etapaDoJogo === "FI") {
//     switch (categoriaJogo) {
//         case '1':
//             precoUnitarioDomestico = 1980
//             break
//         case '2':
//             precoUnitarioDomestico = 1320
//             break
//         case '3':
//             precoUnitarioDomestico = 880
//             break
//         case '4':
//             precoUnitarioDomestico = 330
//             break
//     }
// } 

// let precoUnitarioInternacional = (precoUnitarioDomestico / dolar)
// let precoTotalDomestico = (quantidadeIngressos * precoUnitarioDomestico)
// let precoTotalInternacional = (quantidadeIngressos * precoUnitarioInternacional)

// if (tipoDoJogo === "IN") {
//     console.log(`Segue as informações de compra:
// Nome completo: ${nomeUsuario}
// Tipo de jogo: ${tipoDoJogo}
// Etapa do Jogo: ${etapaDoJogo}
// Categoria do ingresso: ${categoriaJogo}
// Quantidade de ingressos: ${quantidadeIngressos}
// Preço unitário dos ingressos: U$ ${precoUnitarioInternacional}
// Preço total da compra: U$ ${precoTotalInternacional}`)
// } else if (tipoDoJogo === "DO") {
//     console.log(`Segue as informações de compra:
// Nome completo: ${nomeUsuario}
// Tipo de jogo: ${tipoDoJogo}
// Etapa do Jogo: ${etapaDoJogo}
// Categoria do ingresso: ${categoriaJogo}
// Quantidade de ingressos: ${quantidadeIngressos}
// Preço unitário dos ingressos: R$ ${precoUnitarioDomestico}
// Preço total da compra: R$ ${precoTotalDomestico}`)
// }


