require('dotenv').config()

// require the express package
const express = require('express')

// express app
const app = express()

// middleware to run before a request
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// react to request --> route handler
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the app' })
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})