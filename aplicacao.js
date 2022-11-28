// ExpressJS
var app = require('./config/server')


// routes 
var rotaUsuarios = require('./app/routes/aplicacao')(app)

// implicitamente apontando para o localhost (127.0.0.1:porta)
app.listen(4000, function(request, response){

    console.log('Servidor funcionando')

});

