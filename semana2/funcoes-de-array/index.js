// EXERÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// NUMERO 1:

// O console vai imprimir um novo objeto para cada usuario cadastrado no objeto original.Assim:
// nome: "Amanda Rangel", apelido: "Mandi" 0 (e aqui vai sair a array original novamente)

// NÚMERO 2:

// Será impresso:
// ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// NÚMERO 3:

// O console vai imprimir:
// [{nome: "Amanda Rangel", apelido "Mandi"}
//{nome: "Laís Petra", apelido: "Laura"}]

//EXERÍCIOS DE ESCRITA DE CÓDIGO:

// NÚMERO 1:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomeDoguinhos = pets.map((pet, i, array) => {
//      return pet.nome
//  })

 // console.log(nomeDoguinhos)

//  const cachorrosSalsicha = pets.filter((pet, i, array) => {
//      return pet.raca === "Salsicha"
//  })


//  console.log(cachorrosSalsicha)

// const filtrarPoodle = pets.filter(pets => pets.raca === "Poodle")
// const mensagemPoodle = filtrarPoodle.map(pet => console.log(`Você ganhou um cupom de descoto de 10% para tosar o/a ${pet.nome}`))


// NÚMERO 2:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// a) Crie um novo array que contenha apenas o nome de cada item

// const nomeDosItens = produtos.map(item => {return item.nome})

// console.log(nomeDosItens)



// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const itensComDesconto = produtos.map(item => {
//     item.preco = item.preco - (item.preco * 0.05)
//     return {nome: item.nome, preco: item.preco}
// })

// console.log(itensComDesconto)


// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const selecionaBebidas = produtos.filter(item => item.categoria === "Bebidas")
// console.log(selecionaBebidas)



// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const produtosYpe = produtos.filter(item => {
//     const prodMarcaYpe = item.nome.includes("Ypê")
//     return prodMarcaYpe
// })

// console.log(produtosYpe)


// e)Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//  Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê

// const imprimeMensagemProdYpe = produtos.map(item => {
//     if(item.nome.includes("Ypê")) {
//         item = `Compre ${item.nome} por ${item.preco}`
//     }
//     return item
// })
// console.log(imprimeMensagemProdYpe)

