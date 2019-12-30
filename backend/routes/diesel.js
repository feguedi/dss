const Express = require('express')
const app = Express()
const dieselData = require('../db/diesel')

app.get('/diesel', (req, res) => {
    dieselData((err, data) => {
        if (err) return res.json({ message: err.message, status: err.status })
        res.json(data)
    })
})

module.exports = app