const Express = require('express')
const app = Express()
const dollarData = require('../db/dollar')

app.get('/dollar', (req, res) => {
    dollarData((err, data) => {
        if (err) return res.json({ message: err.message, status: err.status })
        res.json(data)
    })
})

module.exports = app