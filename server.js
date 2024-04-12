const express = require('express')  // imports express library
const path = require('path') // imports path library
const bodyParser = require('body-parser')  // imports bodyParser library

const indexRouter = require('./routes/index.js') // import routes.js as indexRouter

const app = express() // creates the web app server

// enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false}))

const staticFileLocation = path.join(__dirname, 'public')  // static files are in this location
app.use(express.static(staticFileLocation)) // web app please use this location

app.set('views', path.join(__dirname, 'views')) // express will find views in view directory on dirname path.  tells app where the views (HTML files or templates) are
app.set('view engine', 'hbs')  // use handlebars to generate views

app.use('/', indexRouter)  // all requests to the app will be passed to indexRouter (receive request and generate response)

const server = app.listen(process.env.PORT || 3000, function() {        // use a specific port to run server on or use port 3000 - starts server
    console.log('Server running on port', server.address().port)
})







