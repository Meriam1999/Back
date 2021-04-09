const mongoose = require('mongoose');
const user = require('./userModel')

const subscriberSchema = user.discriminator('subscriber',new mongoose.Schema(  {

    Etat_subscriber:{
        type:Boolean,
        required:true,
        trim:true
                 },

date_inscription:{
         type:Date,
         required:true,
         trim:true
                },

    adresse :  {
        type:String ,
        required:true,
        trim:true ,
                }
        
}
));

module.exports=subscriberSchema;