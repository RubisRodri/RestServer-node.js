const express = require('express');
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port= process.env.PORT || 3000
        this.usuariosPath = '/api/usuarios';
        //Middelware funciones que se van a realizar cuando ejecutemos nuestro servidor
        this.middelware();
        this.routes();
    }

    middelware(){
        //CORS
        this.app.use( cors());
        
        //lectura y parceo de un post
        this.app.use(express.json());

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
