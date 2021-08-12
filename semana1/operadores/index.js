// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// NÚMERO 1:

// a. false
// b. false
// c. true
// d. boolean



// NÚMERO 2:

// A conversão de string para número não foi realizada depois que o usuário inseriu os números solicitados.

// Se os números inseridos forem, por exemplo, 10 e 50, será impresso no console "1050", 
// já que a variável 'soma' concatenou as duas strings



// NÚMERO 3:

// corrigir para:
// const soma = Number(primeiroNumero) + Number(segundoNumero)



// EXERCÍIOS DE ESCRITA DE CÓDIGO



// NÚMERO 1:

let idade = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual a idade do seu melhor amigo ou amiga?")

let comparador = Number(idade) > Number(idadeAmigo)
let diferencaIdade = Number(idade) - Number(idadeAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", comparador)
console.log("A diferença de idade entre vocês é de", diferencaIdade, "anos")



// NÚMERO 2:

let numeroPar = prompt("Digite um número par")

console.log("Dividindo esse número por dois, sobra:", (numeroPar % 2))

// O padrão é que sempre sobrará zero.
// Quando o usuário inserir qualquer número ímpar, o resto vai ser igual a um.



// NÚMERO 3:

let idadeAnos = prompt("Quantos anos você tem?")

console.log("Sua idade em meses é igual a", (idadeAnos * 12))
console.log("Sua idade em dias é igual a", (idadeAnos * 365))
console.log("Sua idade em horas é igual a", (idadeAnos * 8760))



// NÚMERO 4:

let primeiroNumeroString = prompt("Digite o primeiro número")
let segundoNumeroString = prompt("Agora, digite o segundo número")

let primeiroNumero = Number(primeiroNumeroString)
let segundoNumero = Number(segundoNumeroString)

console.log("O primeiro número é maior que o segundo?", (primeiroNumero > segundoNumero))
console.log("O primeiro número é igual ao segundo?", (primeiroNumero === segundoNumero))
console.log("O primeiro número é divisível pelo segundo?", ((primeiroNumero % segundoNumero) === 0))
console.log("O segundo número é divisível pelo primeiro?", ((segundoNumero % primeiroNumero) === 0))



// DESAFIOS:



// NÚMERO 1:

// let fahrenheit = 77
// let conversaoFahrenKelvin = ((fahrenheit - 32) * (5 / 9) + 273.15)

// console.log("77° Fahrenheit equivalem a", conversaoFahrenKelvin, " graus Kelvin")

// let celsius = 80
// let conversaoCelsiusFahren = (((celsius * (9 / 5)) + 32))

// console.log("80 °C equivalem a", conversaoCelsiusFahren, "graus Fahrenheit")

// celsius = 30
// conversaoCelsiusFahren = (((celsius * (9 / 5)) + 32))
// let conversaoCelsiusKelvin = (celsius + 273.15)

// console.log("30 °C equivalem a", conversaoCelsiusFahren, "graus Fahrenheit e", conversaoCelsiusKelvin, "graus Kelvin")

// let celsiusString = prompt("Insira a temperatura em graus Celsius para conversão")
// let celsiusNumero = Number(celsiusString)
// conversaoCelsiusFahren = (((celsiusNumero * (9 / 5)) + 32))
// conversaoCelsiusKelvin = (celsiusNumero + 273.15)

// console.log(celsiusString, "°C equivalem a", conversaoCelsiusFahren, "graus Fahrenheit e", conversaoCelsiusKelvin, "graus Kelvin")


// NÚMERO 2:

// let consumo = prompt("Qual o seu consumo de quilowatt/hora desse mês?")
// let valorTotal = consumo * 0.05 
// console.log("Você deverá pagar um total de", valorTotal, "reais esse mês")
// console.log("Esse mês, com o desconto de 15%, você deverá pagar", (valorTotal - (0.15 * valorTotal)), "reais")

