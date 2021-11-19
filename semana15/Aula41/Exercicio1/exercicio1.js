// Exercicio 1

//a) Através da propriedade process.argv, que é nativa do Node, podemos passar um valor como entrada
// pelo terminal que é acessada pelo código pela propriedade process.argv

// b)

const nome = process.argv[2]
const idade = Number(process.argv[3])
const mensagem = `Olá, ${nome}! Você tem ${idade} anos.`

console.log(mensagem)

// c)

const idadeFuturo = idade + 7
const mensagem2 = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFuturo}.`

console.log(mensagem2)

