const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresRouter);

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Chavira:MongoCluster12@chaviraabdi-lfl4e.mongodb.net/Pintores?retryWrites=true&w=majority'
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexion establecida con la DataBase');
})
.catch(err=> console.log(err));

app.listen(port, ()=>{
    console.log('Escuchando el puerto. . .')
});