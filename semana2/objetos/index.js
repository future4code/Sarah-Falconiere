//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// NÚMERO 1:

// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h

// NÚMERO 2:

// Juca
// 3
// SRD

// Juba
// 3
// SRD

// Jubo
// 3
// SRD

// Essa sintaxe referencia as informações do objeto citado após os 3 PushSubscriptionOptions,
// copiando-as para o novo objeto

// NÚMERO 3:

// false
// undefined

// foi impresso undefined pq nao foi definida a propriedade "altura" em nenhum momento

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// NÚMERO 1:

// const pessoa = {
//     nome: "Sarah",
//     apelidos: ["Sarinha", "Sassá", "Sariru"]
// }

// function imprimeMensagem(objeto) {
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
// }

// imprimeMensagem(pessoa)

// const novaPessoa = {
//     ...pessoa,
//     apelidos: ["ap1", "ap2", "ap3"]
// }

// imprimeMensagem(novaPessoa)

// NÚMERO 2:

// const pessoa1 = {
//     nome: "Sarah",
//     idade: 25,
//     profissao: "estudante"
// }

// const pessoa2 = {
//     nome: "Mateus",
//     idade: 27,
//     profissao: "Engenheiro Florestal"
// }

// function propriedadesObjetos(objeto) {
//     console.log(`O nome é ${objeto.nome}, e essa propriedade possui ${objeto.nome.length} caracteres.
//     Essa pessoa tem ${objeto.idade} anos e é ${objeto.profissao}, com ${objeto.profissao.length} caracteres`)
// }

// propriedadesObjetos(pessoa1)
// propriedadesObjetos(pessoa2)

// NÚMERO 3:

// const carrinho = []

// const fruta1 = {
//     nome: "Maçã",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Banana",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Abacate",
//     disponibilidade: true
// }

// const compras = fruta => {
//     carrinho.push(fruta.nome)
//     return carrinho
// }

// compras(fruta1)
// compras(fruta2)
// compras(fruta3)

// console.log(carrinho)

// DESAFIOS:

// NÚMERO 1:

// const nomeUsuario = prompt("Qual seu nome?")
// const idadeUsuario = Number(prompt("Qual sua idade?"))
// const profissaoUsuario = prompt("Qual a sua profissão?")

// const pessoa1 = {
//     nome: nomeUsuario,
//     idade: idadeUsuario,
//     profissao: profissaoUsuario
// }

// console.log(pessoa1)
// console.log(pessoa1.typeof)

// NÚMERO 2:

// const filme1 = {
//     nome: "Perdido em Marte",
//     ano: 2015
// }


// const filme2 = {
//     nome: "Meninas Malvadas",
//     ano: 2007
// }

// const comparaFilmes = (primeiroFilme, segundoFilme) => {
//     comparadorMaior = primeiroFilme.ano > segundoFilme.ano
//     comparadorIgual = primeiroFilme.ano === segundoFilme.ano
//     console.log(`O primeiro filme foi lançado antes do segundo? ${comparadorMaior}`)
//     console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${comparadorIgual}`)
// }

// comparaFilmes(filme1, filme2)

// NÚMERO 3:

// const carrinho = []

// const fruta1 = {
//     nome: "Maçã",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Banana",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Abacate",
//     disponibilidade: true
// }

// const compras = fruta => {
//     carrinho.push(fruta.nome)
//     return carrinho
// }

// compras(fruta1)
// compras(fruta2)
// compras(fruta3)

// console.log(carrinho)

// function controleEstoque(produto) {
//     produto.disponibilidade = false
//     console.log(`o produto ${produto.nome} tem a disponibilidade igual a: ${produto.disponibilidade}`)
// }

// controleEstoque(fruta1)