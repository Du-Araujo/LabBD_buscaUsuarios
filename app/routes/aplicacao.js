module.exports = function(app){

app.get('/usuarios', function(req, res){

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin123',
        database:'projectdudu'
    })

    connection.query("SELECT * FROM usuarios", function(error, result){

        res.render("usuarios/usuarios", {usuarios: result})


    });

});




}