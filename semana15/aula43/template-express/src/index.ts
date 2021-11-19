import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries } from './data'
import { country } from './types'

const app = express()

app.use(express.json())
app.use(cors())


//ENDPOINT DE TESTE
app.get(
    "/test",
    (req, res) => {
        res.send("Olá do Express")
    })

//ENDPOINT DE BUSCAR TODOS OS PAÍSES
app.get("/countries", (req: Request, res: Response) => {

    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res
        .status(200)
        .send(result)
})


//ENDPOINT DE BUSCAR COM FILTROS
app.get("/countries/search", (req: Request, res: Response) => {

    let result: country[] = countries

    if (req.query.name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )
    }

    if (req.query.capital) {
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )
    }

    if (req.query.continent) {
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )
    }

    res
        .status(200)
        .send(result)
})



//ENDPOINT DE BUSCAR PAÍS POR ID
app.get("/countries/:id", (req, res) => {

    const id = req.params.id

    const result = countries.find(country => {
        return country.id === Number(id)
    })

    if (result)
        res.status(200).send(result)
    else
        res.status(404).send("País não encontrado")
})


//ENDPOINT DE EDITAR UM PAÍS
app.put("/countries/:id", (req, res) => {
    const id = req.params.id

    let result: country | undefined = countries.find((country) => {
        return country.id === Number(id)
    })

    if (result) {
        req.body.name = "Brazilzil"
        let editResult = {...result, name: req.body.name}
        res
        .status(200)
        .send(editResult)
    } else {
        res
        .status(404)
        .send("País não encontrado!")
    }
})



app.listen(3003, () => {
    console.log("Servidor pronto!")
})