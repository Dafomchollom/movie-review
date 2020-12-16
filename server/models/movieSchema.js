const mongoose = require('mongoose')

const movies = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        default: 'none'
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    trailerLink: String,
})

module.exports = mongoose.model('Movies', movies)