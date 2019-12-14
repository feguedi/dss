const {
    PORT
} = require('./config')
const Express = require('express')
const app = Express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, () => console.log(`Escuchando puerto ${ PORT }`))