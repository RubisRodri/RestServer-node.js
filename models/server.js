const express = require('express');
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port= process.env.PORT
        this.usuariosPath = '/api/usuarios';
        //Middelware funciones que se van a realizar cuando ejecutemos nuestro servidor
        this.middelware();
        this.routes();
    }

    middelware(){
        
        this.app.use( cors())
        //directorio publico
        this.app.use(express.static('public'));

    }

    routes(){
         
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
   
    }

    listen(){
        
        this.app.listen(this.port, () =>{
            console.log('servidor corriendo en puerto', this.port);
        });
    }

};


module.exports = Server;