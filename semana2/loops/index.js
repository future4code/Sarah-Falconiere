// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO: 

// NÚMERO 1:

// O código está imprimindo no console uma variável que toda hora recebe um novo valor, enquanto i for menor que 5.
// O resultado impresso será:
// 0
// 1
// 2
// 3
// 4

// NÚMERO 2:

// Será impresso:
// 19
// 21
// 23
// 25
// 27
// 30

// Não, o for...of não pode ser utilizado nesse caso. O uso do for declarando a variável i é mas indicado.

// NÚMERO 3:

// *
// **
// ***
// ****

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// NÚMERO 1:

// const pestUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))

// if (pestUsuario === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else if (pestUsuario > 0) {
//     let conjuntoDePet = []
//     for(let i = 1; i <= pestUsuario; i++) {
//         let nomePet = prompt(`Digite o nome do seu pet número ${i}`)
//         conjuntoDePet.push(nomePet)
//     }
//     console.log(conjuntoDePet)
// }


// NÚMERO 2:

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a)

// let i = 0

// while (i < arrayOriginal.length) {
//     console.log(arrayOriginal[i])
//     i++
// }

// b)

// for(let i = 0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i] / 10)
// }

// c)

//  let novaArray = []
// for (let i = 0; i < arrayOriginal.length; i++) {
//     if (arrayOriginal[i] % 2 === 0) {
//         novaArray.push(arrayOriginal[i])
//     }
// }

// console.log(novaArray)

// d)

// for(let i = 0; i < arrayOriginal.length; i++) {
//     let novoArray = ["O elemento do index " +i+ " é: " +arrayOriginal[i]+ "."]
//     console.log(novoArray)
// }

// e)

// let valorMaximo = 1
// let valorMinimo = 1000

// for(let i = 0; i < arrayOriginal.length; i++) {
//     if (arrayOriginal[i] > valorMaximo) {
//         valorMaximo = arrayOriginal[i]
//     }

//     if (arrayOriginal[i] < valorMinimo) {
//         valorMinimo = arrayOriginal[i]
//     }
// }

// console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)


// DESAFIOS:

// NÚMERO 1:

// const numeroEscolhido = Number(prompt("Vamos jogar! Escolha um número"))
// let numeroChutado = Number(prompt("Chute um número"))
// let i = 0

// while (numeroChutado !== numeroEscolhido) {
//     if (numeroChutado > numeroEscolhido) {
//     console.log(`O número chutado foi: ${numeroChutado}`)
//     console.log("Errrrrrou, é menor")
//     } else {
//     console.log(`O número chutado foi: ${numeroChutado}`)
//     console.log("Errrrrrou, é maior")
//     }
//     numeroChutado = Number(prompt("Chute um número"))
//     i++
// }

// if (numeroChutado === numeroEscolhido) {
//     console.log(`O número chutado foi: ${numeroChutado}`)
//     console.log("Acertou!!")
//     console.log(`O número de tentativas foi: ${i + 1}`)
// }

// NÚMERO 2:

// function getRandom(min,max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min)) + min
// }

// const numeroEscolhido = getRandom(1,100)
// //console.log(numeroEscolhido)
// console.log("Vamos jogar")


// let numeroChutado = Number(prompt("Chute um número"))
// let i = 0

// while (numeroChutado !== numeroEscolhido) {
//     if (numeroChutado > numeroEscolhido) {
//     console.log(`O número chutado foi: ${numeroChutado}`)
//     console.log("Errrrrrou, é menor")
//     } else {
//     console.log(`O número chutado foi: ${numeroChutado}`)
//     console.log("Errrrrrou, é maior")
//     }
//     numeroChutado = Number(prompt("Chute um número"))
//     i++
// }

// if (numeroChutado === numeroEscolhido) {
//     console.log(`O número chutado foi: ${numeroChutado}`)
//     console.log("Acertou!!")
//     console.log(`O número de tentativas foi: ${i + 1}`)
// }