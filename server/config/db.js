const mysql = require('mysql');


const db = mysql.createConnection({
host: "127.0.0.1",
user: "jose",
password: "Mesopotamia@45",
database:"pesquisaCep" 
})
module.exports = db;