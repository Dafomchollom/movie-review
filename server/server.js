const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()
const mongoose = require('mongoose')
// import routes
// routes for movies
const movieRoute = require('./routes/movies')
// routes for television
const tvRoute = require('./routes/television')

app.use('/api/movies', movieRoute)
app.use('/api/tv', tvRoute)
// use dotenv
require('dotenv/config')
// Body parser, to access `req.body`
app.use(bodyParser.json())

// Sessions to create `req.session`
// app.use(
//   session({
//     secret: 'super-secret-key',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60000 },
//   })
// )

// // POST `/api/login` to log in the user and add him to the `req.session.authUser`
// app.post('/api/login', function (req, res) {
//   if (req.body.username === 'demo' && req.body.password === 'demo') {
//     req.session.authUser = { username: 'demo' }
//     return res.json({ username: 'demo' })
//   }
//   res.status(401).json({ error: 'Bad credentials' })
// })

// // POST `/api/logout` to log out the user and remove it from the `req.session`
// app.post('/api/logout', function (req, res) {
//   delete req.session.authUser
//   res.json({ ok: true })
// })

// app.get('/api/logout', function (req, res) {
//   //   delete req.session.authUser
//   res.send('hi bro')
// })

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// No build in production
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)
// app.listen(5000)
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log('connected to DB')
  }
)
// connect mongoose db
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port} ...`))
console.log('Server is listening on http://localhost:5000')
