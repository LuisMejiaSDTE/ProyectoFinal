const mysql = require("mysql");
var sqlConnecion = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"password",
    database:"sistemas"
});

sqlConnecion.connect(function(err){
    if(err){
        console.log(err.message);
    }
    else{
        console.log("se conecto con exito")
    }
});

module.exports = sqlConnecion;