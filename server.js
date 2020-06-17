var mysql = require('mysql');



var con = mysql.createConnection({,

  hostname = 'localhost';
port = 3000;
  user: "ArjunKumar",
  password: "alphindboost"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


con.connect(function(err) {e 
    if (err) throw err;
    console.log("Database created");
  });
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE CIMS (name VARCHAR(10),Age NUMBER(3), Phone number Number(3), Address VARCHAR(50) email id VARCHAR(25), Degree VARCHAR(7))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM CIMS ORDER BY name, Age", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

