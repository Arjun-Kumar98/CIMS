var mysql = require('mysql');
<div id="Detailsinput.html" style="display:none;"> </div>


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
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

var mailOptions = {
    from: '"Arjun Kumar" <mrarjunkumar42@gmail.com>',
    to: 'document.getElementbyId("email")',
    subject: 'CIMS admission', 
    text: 'We will get back to you soon', 
    html: '<b>CIMS admission</b>' 
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
