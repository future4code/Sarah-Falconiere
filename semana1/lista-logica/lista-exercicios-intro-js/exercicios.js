// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Entre com a altura do retângulo")
  const largura = prompt("Entre com a largura do retângulo")
  area = (Number(altura) * Number(largura))
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("digite o ano atual")
  const anoDeNascimento = prompt("Digite seu ano de nascimento")
  console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Insira seu nome")
  const idade = prompt ("Quantos anos você tem?")
  const email = prompt("Digite seu e-mail")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const coresFavoritas = []
  const primeiraCor = prompt("Insira sua cor favorita")
  const segundaCor = prompt("Insira outra cor que você gosta")
  const terceiraCor = prompt("Tem mais uma cor que você acha legal?")

  coresFavoritas.push(primeiraCor,segundaCor,terceiraCor)

  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantidadeIngressos = custo / valorIngresso
  return quantidadeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const confereTamanho = string1.length === string2.length
  return confereTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = primeiroElemento
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const comparador = string1.toLowerCase() === string2.toLowerCase()
  return comparador

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
  const anoCarteiraID = Number(prompt("Qual o ano em que seu RG foi emitido?"))
  const idade = anoAtual - anoNascimento
  const diferencaAnos = anoAtual - anoCarteiraID

  const condicao1 = (idade <= 20 && diferencaAnos >= 5)
  const condicao2 = (idade > 20 && idade <= 50 && diferencaAnos >= 10)
  const condicao3 = (idade > 50 && diferencaAnos >= 15)

  console.log(condicao1 || condicao2 || condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const cond1 = ano % 400 === 0
  const cond2 = ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)
  
  return (cond1 || cond2)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
 const idade = prompt("Você tem mais de 18 anos?")
 const ensinoMedio = prompt("Você possui ensino médio completo?")
 const disponibilidade = prompt("Você possui disponibilidade de horário?")

 const verificaIdade = idade.toUpperCase() === "SIM"
 const verificaEM = ensinoMedio.toUpperCase() === "SIM"
 const verificaDispo = disponibilidade.toUpperCase() === "SIM"

 console.log(verificaIdade && verificaEM && verificaDispo)

}