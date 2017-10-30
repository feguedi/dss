var mysql = require('mysql'),
    express = require('express'),
    http = require('http');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "DSS"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("¡Conectado!");

    con.query("SELECT * FROM DSS", function(err, result) {
        if(err) throw err;
        console.log("Resultado: " + result);
    });
});
