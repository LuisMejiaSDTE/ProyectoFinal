const res = require('express/lib/response');
const conexion = require('../models/conexion.js');
var contactos={}

contactos.insertar = function insertar(contacto){
    var sqlConsulta = "INSERT INTO contactos set ?"
    conexion.query(sqlConsulta.contacto,function(err,res){
        if(err){
            console.log(err.message);
        }
        else{
            console.log(res.insertId);
        }
    })
}