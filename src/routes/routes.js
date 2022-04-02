import express from 'express'
import { getIndex, getDetalhes, getDeletar, getAdicionar, postAdicionar, getEditar, postEditar } from './controller/CatalogoController.js'


export const routes = express.Router()

routes.get("/", getIndex)
routes.get('/detalhes/:id', getDetalhes)
routes.get('/apagar/:id', getDeletar)
routes.get('/adicionar', getAdicionar)
routes.post('/adicionar', postAdicionar)
routes.get('/editar/:id', getEditar)
routes.post('/editar/:id', postEditar)
