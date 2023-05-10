const path = require('path')
const rootDir = require('./utils/path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const libs = require('./utils/books')
const booksRoute = require('./routes/books')

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());

app.use(booksRoute)
app.use((req,res, next) => {
    res.status(404)
        .send('404')
})

app.listen(3000)