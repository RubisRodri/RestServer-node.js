const express = require('express');
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port= process.env.PORT

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
        this.app.get('/api', (req, res) => {
            res.json({
                msg:'get Api'
            });
        })

        this.app.post('/api', (req, res) => {
            res.json({
                msg:'soy post'
            });
        })

        this.app.put('/api', (req, res) => {
            res.json({
                msg:'soy put'
            });
        })

        this.app.delete('/api', (req, res) => {
            res.json({
                msg:'soy delete'
            });
        })
    }

    listen(){
        
        this.app.listen(this.port, () =>{
            console.log('servidor corriendo en puerto', this.port);
        });
    }

};


module.exports = Server;