const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())

const MovieSchema = require('../models/movieSchema')
// api to get all movies
router.get('/', async (req, res) => {
    try{
        const allMovies = await MovieSchema.find()
        res.json(allMovies)
        res.status(200)
    }catch(error){
        console.log('error', error)
    }
})
// add a new movie
router.post('/', async (req, res) => {
    const post = new MovieSchema({
        title: req.body.title,
        summary: req.body.summary,
        trailerLink: req.body.trailerLink
    })
    console.log('posting all movies', req.body)
    try{
        const savedPost = await post.save()
        res.json(savedPost)
        res.status(200)
    }catch(error){
        console.log('error', error)
    }
})

module.exports = router
