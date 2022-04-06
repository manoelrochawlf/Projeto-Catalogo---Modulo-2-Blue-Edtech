import express from 'express';


const port = 3000;
export const routes = express.Router()
import { getIndex, getDetalhes, getDelete, getCreate, postCreate, getEdit, postEdit } from "../controller/idolosController.js"

routes.get('/', getIndex)
routes.get('/detalhes/:id', getDetalhes )
routes.get('/delete/:id', getDelete)

routes.get('/create', getCreate)
routes.post('/create', postCreate)

routes.get('/edit/:id', getEdit)
routes.post('/edit/:id', postEdit)
