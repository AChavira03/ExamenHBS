const mongoose = require('mongoose');
//Schema

let Schema = mongoose.Schema;

//coleccion

let pintoresSchema = new Schema({
    nombre:{
        type : String,
        require : [true, 'Requerimos el nombre']
    },
    pais:{
        type : String,
        require : [true, 'Requerimos el pais']
    },
    periodo:{
        type : String,
        require : [true, 'Requerimos el periodo']
    },
    nacio:{
        type : String,
        require : [true, 'Requerimos el año de nacimiento']
    },
    murio:{
        type : String,
        require : [true, 'Requerimos el año de muerte']
    },
    img:{
        type : String,
        require : [true, 'Requerimos la imagen']
    }
});

module.exports = mongoose.model('Pintores', pintoresSchema);
