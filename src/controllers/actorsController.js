const db = require('../database/models')

const actorsController = {
  list: async (req, res) => {
    try {
      const actores = await db.Actores.findAll()
      res.render('../views/actorsList', {actors:actores})
    } catch (error) {
      console.log(error)
      res.send(error.message)
    }
  },
  detail: async (req,res) => {
    try {
        const actor = await db.Actores.findByPk(req.params.id)
        res.render('../views/actorsDetail', {actor})
      } catch (error) {
        console.log(error)
        res.send(error.message)
      }
}
}
module.exports= actorsController