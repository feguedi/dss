const connection = require('./connection')

const allData = callback => {
    const query = `SELECT * FROM diesel;`
    connection.query(query, (err, data) => {
        if (err) return callback({ message: err.message, status: err.sqlState })
        if (!data) return callback({ message: 'Conjunto vacío', status: 200 })
        callback(null, data)
    })
}

module.exports = allData