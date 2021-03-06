// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse()
    let novaArray = []
    for(let i = array.length - 1; i >= 0; i--) {
        novaArray.push(array[i])
    }
    return novaArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a, b) {
        return a - b;
      });
    return array
    // let novaArray = []
    // for(let i = 0; i < array.length; i++) {
    //     for(let j = 0; j < array.length; j++) {
    //         if(array[i]  array[j]) {
    //             novaArray.push(array[i])
    //         }
    //     }
    // }
    // return novaArray
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novaArray = array.filter(array => array % 2 === 0)
    return novaArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novaArray = array.filter(array => array % 2 === 0).map(array => array * array)
    return novaArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    for(let numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    } 
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNum
    let menorNum
    if(num1 > num2) {
        maiorNum = num1
        menorNum = num2
    } else {
        maiorNum = num2
        menorNum = num1
    }

    let divisor = maiorNum % menorNum === 0
    const objetoDeDoisNumeros = {
        maiorNumero: maiorNum,
        maiorDivisivelPorMenor: divisor,
        diferenca: (maiorNum - menorNum)
    }
    return objetoDeDoisNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [0]
    for(let i = 0; i < n - 1; i++) {
        numerosPares.push(numerosPares[i] + 2)
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoTriangulo = ""
    if(ladoA === ladoB && ladoA === ladoC) {
        tipoTriangulo = "Equilátero"
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        tipoTriangulo = "Isósceles"
    } else {
        tipoTriangulo = "Escaleno"
    }
    return tipoTriangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function(a, b) {
        return a - b;
      });
    let novaArray = [array[array.length - 2], array[1]]
    return novaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let mensagem = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    return mensagem
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   novaPessoa = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter(item => item.idade > 14 && item.idade <=  60 && item.altura >= 1.5)
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter(item => item.idade <= 14 || item.idade > 60 || item.altura < 1.5)
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(let obj of contas) {
        for(let compra of obj.compras) {
           obj.saldoTotal = obj.saldoTotal - compra
        }
        obj.compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function(a, b) {
        return a.dataDaConsulta - b.dataDaConsulta;
    });
    return consultas
}