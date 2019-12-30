const { config } = require('dotenv')
config({ silent: true })

module.exports = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    SECRET_KEY: process.env.SECRET_KEY,
    BD_HOST: process.env.BD_HOST,
    BD_PORT: process.env.BD_PORT,
    BD_USER: process.env.BD_USER,
    BD_NAME: process.env.BD_NAME,
    BD_PASS: process.env.BD_PASS
}