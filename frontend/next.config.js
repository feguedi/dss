require('dotenv').config({ silent: true })
module.exports = {
    env: {
        WEBSERVICE_HOST: process.env.WEBSERVICE_HOST,
        PORT: process.env.PORT
    }
}