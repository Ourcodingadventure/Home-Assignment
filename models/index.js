const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_userName,
  password: process.env.DB_PW,
  database: "iot",
});

con.connect(function (err) {
  //todo create db function...
  try {
    con.query("CREATE DATABASE if not exists iot", function (err, result) {
      if (err) throw err;
      console.log("database created");
    });
    if (err) throw err;
    console.log("Connected!");
    var sql =
      "CREATE TABLE if not exists crane (crane_id VARCHAR(255) NOT NULL unique,deleted BOOLEAN default false, crane_name VARCHAR(255), PRIMARY KEY (crane_id))";

    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    var secondTable =
      "CREATE TABLE if not exists device (device_id varchar(255) NOT NULL unique, serial_number VARCHAR(255), description VARCHAR(255), deleted BOOLEAN default false, crane_id varchar(255),CONSTRAINT crane_id FOREIGN KEY (crane_id) REFERENCES crane(crane_id), PRIMARY KEY (device_id))";
    con.query(secondTable, secondTable, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  } catch (err) {
    console.log("err", err);
  }
});

module.exports = con;
