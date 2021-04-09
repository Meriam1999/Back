const mongoose =require('mongoose');
//The function trim returns the string without white spaces
const subscriber = require('./subscriberModel');
const adminSchema = subscriber.discriminator('Admin',new mongoose.Schema ({
    etat_admin:{
        type:Boolean,
        required:true,
        trim:true
        },

    dateInscription : { 
        type : Date,
        default : Date.now }
       })
);

module.exports=adminSchema;