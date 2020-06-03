let mongoose = require('mongoose');
// unir modelo

let pintores = require('../models/pintores');

let pintoresController = {};

pintoresController.list= (req, res)=>{
    pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err, pintor)=>{
        if(err){
            Console.log('Error: ', err)
        }
        res.render('../views/index')
    })
};

module.exports = pintoresController;