import express from 'express'
import { routes } from './src/routes/routes.js'
import path from 'path'

const port = 3004
const __dirname = path.resolve(path.dirname(""))
const app= express()

app.set('view engine', 'ejs')
app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, (req, res) => {
    console.log(`Estou rodando na porta ${port}`)
})
