const mongoose = require('mongoose')

const tvShows = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        default: 'none'
    },
    numberOfSeasons: {
        type: Number,
        default: 0,
        required: true,
    }
})

module.exports = mongoose.model('tvShows', tvShows)