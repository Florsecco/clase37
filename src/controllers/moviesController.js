const db = require('../database/models')

const moviesController = {
  list: async (req, res) => {
    try {
      const peliculas = await db.Peliculas.findAll({
        order: [['title', 'ASC']]
      })
      // console.log(JSON.stringify(peliculas, null, 4))
      res.render('../views/moviesList', {movies:peliculas})
    } catch (error) {
      console.log(error)
      res.send(error.message)
    }
  },
  detail: async (req,res) => {
    try{
        const peli = await db.Peliculas.findByPk(req.params.id)
        res.render('../views/moviesDetail', {movie:peli})
    } catch (error) {
        console.log(error)
        res.send(error.message) 
    }   
  },
  new: async (req,res) =>{
    try{
        const peliculas = await db.Peliculas.findAll({
            order: [['release_date', 'DESC']]
          })
          res.render('../views/newestMovies', {movies:peliculas}) 
    } catch (error) {
        console.log(error)
        res.send(error.message) 
    }
  },
  recomended: async (req,res) => {
    try{
        const peliculas = await db.Peliculas.findAll({
            order: [['rating', 'DESC']],
            limit: 5
          })
          res.render('../views/recommendedMovies', {movies:peliculas})  
    }catch (error) {
        console.log(error)
        res.send(error.message) 
    }
  },
  add: (req,res)=>{
    res.render('../views/createMovie')
  },
  create: async(req,res)=>{
    try{
      await db.Peliculas.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.date,
        length: req.body.longitud
      })
      res.redirect('/movies')
        
  } catch (error) {
      console.log(error)
      res.send(error.message) 
  }
},
  edit: async (req,res)=>{
    try{
      const peli = await db.Peliculas.findByPk(req.params.id)
      res.render('../views/editMovie', {movie:peli})
    } catch (error) {
      console.log(error)
      res.send(error.message) 
    } 
  },
}

module.exports = moviesController