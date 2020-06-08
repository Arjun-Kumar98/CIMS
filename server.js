var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ArjunKumar",
  password: "alphindboost"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

