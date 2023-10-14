const mysql = require("mysql2")

const connection = mysql.createConnection({
  user: "root",
  password: "manager",
  host: "localhost",
  port: 3306,
  database: "pg_booking_node",
})

connection.connect()

module.exports = connection
