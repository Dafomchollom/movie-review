const express = require('express')

const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())

const TvSchema = require('../models/tvSchema')

// get all tv shows
router.get('/', async (req, res) => {
    try{
        const allMovies = await TvSchema.find()
        res.json(allMovies)
    }catch(error){
        console.log('error', error)
    }
})
// add a new movie
router.post('/', async (req, res) => {
    const post = new TvSchema({
        title: req.body.title,
        summary: req.body.summary,
        numberOfSeasons: req.body.numberOfSeasons
    })
    console.log('posting all movies', req.body)
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    }catch(error){
        console.log('error', error)
    }
})

module.exports = router
