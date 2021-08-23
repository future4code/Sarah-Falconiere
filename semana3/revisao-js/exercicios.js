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

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}