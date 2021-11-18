// EXERCÍCIO 1

//a)

const minhaString: string = "Essa é minha string"
//Caso eu mude para um número, ocorre um erro. O TS nao aceita um tipo diferente do que foi declarado


//b)
const meuNumero: number | string = "oi"


//c)
enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

const menina1: Pessoa = {
    nome: "Sarah",
    idade: 25,
    corFavorita: Cores.VERDE
}

const menina2: Pessoa = {
    nome: "Luisa",
    idade: 27,
    corFavorita: Cores.VERMELHO
}

const menina3: Pessoa = {
    nome: "Marina",
    idade: 22,
    corFavorita: Cores.AMARELO
}

const grupoMeninas: Pessoa[] = []

grupoMeninas.push(menina1)
grupoMeninas.push(menina2)
grupoMeninas.push(menina3)

console.log(Cores)
console.log(grupoMeninas)






//EXERCÍCIO 2

//a)

type ResultadosEstatisticos = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(
    numeros: number[]
): ResultadosEstatisticos {
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {
        maior: number,
        menor: number,
        media: number
    } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas

}

console.log(obterEstatisticas([1, 5, 6, 7, 15, 29]))






//EXERCICIO 3


//a)

type post = {
    autor: string,
    texto: string
}

const post1: post = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
}

const post2: post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}

const post3: post = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}

const post4: post = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}

const post5: post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

const posts: post[] = []
posts.push(post1, post2, post3, post4, post5)

console.log(posts)

//b)

function buscarPostsPorAutor(
    posts: post[],
    autorInformado: string
): post[] {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
    }

console.log(buscarPostsPorAutor(posts, "Lord Voldemort"))
