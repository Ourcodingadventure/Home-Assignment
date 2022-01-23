const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_userName,
  password: "root",
  database: "iot",
});

con.connect(function (err) {
  try {
    if (err) throw err;
    console.log("Connected!");
    var sql =
      "CREATE TABLE if not exists crane (id int NOT NULL AUTO_INCREMENT, crane_name VARCHAR(255), PRIMARY KEY (id))";

    con.query(sql, secondTable, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    var secondTable =
      "CREATE TABLE if not exists device (id int NOT NULL AUTO_INCREMENT, serial_number VARCHAR(255), description VARCHAR(255), deleted BOOLEAN, CONSTRAINT crane_id FOREIGN KEY (id) REFERENCES crane(id), PRIMARY KEY (id))";
    con.query(secondTable, secondTable, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  } catch (err) {
    console.log("err", err);
  }
});

module.exports = con;
