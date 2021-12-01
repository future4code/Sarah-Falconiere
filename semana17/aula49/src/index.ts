import express from 'express'
import cors from 'cors'
import { getOrderByNameAndTypeAndEmail } from './endpoints/getOrderByNameAndTypeAndEmail'


//configurar express
const app = express()
app.use(express.json())
app.use(cors())


// app.get("/users", getAllUsers)
app.get("/users/infos", getOrderByNameAndTypeAndEmail)
// app.get("/users/page" , get5UsersPerPage)
// app.get("/users/complete", getUsersFinal)
// app.get("/users/:type", getTypesUsers)


app.listen(process.env.PORT || 3003, () => {
    console.log('Servidor rodando na porta 3003')
})