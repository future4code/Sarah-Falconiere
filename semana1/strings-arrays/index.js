// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// NÚMERO 1:

// a. undefined
// b. null
// c. 11
// d. 3
// e. 3, 19, 5, 6 ....
// f. 9

// NÚMERO 2:

// SUBI NUM ÔNIBUS EM MIRROCOS 27

// EXERCÍCIOS DE ESCRITA DE CODIGO

// NÚMERO 1:

let emailDoUsuario = prompt("Digite seu e-mail")
let nomeDoUsuario = prompt("Digite seu nome completo")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso.
Seja bem-vinda(o), ${nomeDoUsuario}.`)

// NÚMERO 2:

const comidasPreferidas = ["Strogonoff", "Japones", "Pizza", "Hamburguer", "Esfiha"]

console.log(comidasPreferidas)

console.log(`Essas são minhas comidas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`)

let comidaUsuario = prompt("Qual a sua comida preferida?")

comidasPreferidas[1] = comidaUsuario

console.log(comidasPreferidas)

// NÚMERO 3:

const listaDeTarefas = []
let tarefaUm = prompt("Qual a primeira tarefa que você deve realizar hoje?")
let tarefaDois = prompt("Qual a segunda tarefa que você deve realizar hoje?")
let tarefaTres = prompt("Qual a terceira tarefa que você deve realizar hoje?")

listaDeTarefas.push(tarefaUm)
listaDeTarefas.push(tarefaDois)
listaDeTarefas.push(tarefaTres)

console.log(listaDeTarefas)

let indiceTarefa = prompt("Digite o índice da tarefa que já realizou")

listaDeTarefas.splice(indiceTarefa, 1)

console.log(listaDeTarefas)

// DESAFIOS:

// NÚMERO 1:

// const fraseUsuario = prompt("Digite uma frase que eu a transformarei em uma array")

// let arrayDoUsuario = fraseUsuario.split(" ")

// console.log(arrayDoUsuario)

// NÚMERO 2:

// let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// console.log(frutas.indexOf("Abacaxi"), frutas.length)