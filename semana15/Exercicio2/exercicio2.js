// Exercicio 2

const conta = (operacao, num1, num2) => {
    switch (operacao) {
        case "soma":
            console.log("Resposta:", num1 + num2)
            break;
        case "sub":
            console.log("Resposta:", num1 - num2)
            break;
        case "mult":
            console.log("Resposta:", num1 * num2)
            break;
        case "div":
            console.log("Resposta:", num1 / num2)
            break;
        default:
            console.log("Erro na operação")
    }
}

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

conta(operacao, num1, num2)