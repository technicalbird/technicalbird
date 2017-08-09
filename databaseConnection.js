var mysql      = require('mysql');
var server      = require('./server');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'technical_bird',
  multipleStatements: true
});

exports.connection = connection;
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});
