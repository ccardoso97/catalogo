import express from 'express'
import { getIndex } from './controller/CatalogoController.js'
export const routes = express.Router()

routes.get("/", getIndex)
