const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1111",
    database: "stick_lemon",
    port: 3306, // 3306은 지정안해도 됨 default 값
});

module.exports = db;