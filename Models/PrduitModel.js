const mongoose =require('mongoose');
const produit = new mongoose.Schema({

   
    Nom: {
        type:String,
        required:true,
        trim:true
    },


    
})
module.exports=mongoose.model('produit',produit);