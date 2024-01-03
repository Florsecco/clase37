const db = require('../database/models')

const genresController = {
    list: async (req, res) => {
      try {
        const generos = await db.Generos.findAll({
            order:[['name', 'ASC']]
        })
        console.log(JSON.stringify(generos, null, 4))
        res.render('../views/genresList',{genres:generos})
      } catch (error) {
        console.log(error)
        res.send(error.message)
      }
    },
    detail: async (req,res) => {
        try{
            const genero = await db.Generos.findByPk(req.params.id)
            res.render('../views/genresDetail', {genre:genero})
        } catch (error) {
            console.log(error)
            res.send(error.message) 
        }   
      }
  }
  
  module.exports = genresController