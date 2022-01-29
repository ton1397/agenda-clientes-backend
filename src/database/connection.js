const mysql = require("mysql");

const pool = mysql.createPool({
    host: "host",
    database: "agenda_clientes",
    user: "user",
    password: "pass"
});

exports.pool = pool;