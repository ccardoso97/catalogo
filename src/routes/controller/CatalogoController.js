import { variados } from '/DEV/github/catalogo/src/model/catalogue.js'

export const getIndex = async (req, res) => {
    try {
        const bebidas = await variados.findAll()
        res.render('index.ejs', {
            bebidas
        })
    }   
    catch(err){
        console.log(err.message)
    }
}