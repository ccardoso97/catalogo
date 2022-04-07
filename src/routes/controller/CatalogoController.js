import { variados } from '/DEV/github/catalogo/src/model/catalogue.js'
import { Sequelize } from 'sequelize'

export const getIndex = async (req, res) => {
    try {
        const bebidas = await variados.findAll({order:[['ano', "ASC"]]})
        res.status(200).render('index.ejs', {
            bebidas
        })
    }   
    catch(err){
        res.status(500).send(err.message)
    }
}
export const getDetalhes = async (req, res) => {
    try {
        const bebidas = await variados.findByPk(req.params.id)
        res.status(200).render('detalhes.ejs', {
            bebidas
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}
export const getDeletar = async (req, res) => {
    try {
        await variados.destroy({
            where: {
            id: req.params.id
        }})
        res.status(200).redirect("/")
    }
    catch(err){
        res.status(500).send({err: err.message})
    }
}
export const getAdicionar = (req, res ) => {
    res.status(200).render('adicionar.ejs')
}
export const postAdicionar = async (req, res) => {
    try {
        const { nome, img, ano, criador, origem, teor } = req.body
        await variados.create({
            nome, img, ano, criador, origem, teor
        })
        res.status(200).redirect('/')
    }
    catch(err){
        res.status(500).send({err: err.message})
    }

}
export const getEditar = async (req, res) =>{
    const bebida = await variados.findByPk(req.params.id)
    res.status(200).render('edit.ejs', {
        bebida
    })
}
export const postEditar = async (req, res) =>{
    const { nome, img, ano, criador, origem, teor } = req.body
    try {
        await variados.update({ 
            nome: nome, 
            img: img, 
            ano: ano, 
            criador: criador, 
            origem: origem, 
            teor: teor 
        }, {
            where: {
                id: req.params.id
                   }
           })
        res.status(200).redirect('/')
    }
    catch(err){
        res.status(500).send({err: err.message})
    }
}
// export const getPesquisar = async (req, res) =>{
//     const pesquisar = req.body.pesquisar
//     try {
//         const nome = await variados.findAll({
//         where: {
//             nome: {
//                 [Sequelize.Op]: Like`$[pesquisar]`
//             }
//         }
//     })
//     }
//     catch(err){
//         res.status(500).send({err: err.message})
//     }
// }
