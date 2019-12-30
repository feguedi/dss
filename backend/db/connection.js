const { createConnection } = require('mysql')
const { BD_HOST, BD_NAME, BD_USER, BD_PASS } = require('../config')

const connection = createConnection({ host: BD_HOST, database: BD_NAME, user: BD_USER, password: BD_PASS })

module.exports = connection