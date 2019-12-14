const Express = require('express')
const app = Express()

app.use(require('./diesel'))
app.use(require('./dollar'))

module.exports = app