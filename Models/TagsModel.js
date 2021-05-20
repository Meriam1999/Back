const mongoose =require('mongoose');
const image = new mongoose.Schema({

   
    Contenu : {
        type:String,
        required:true,
        trim:true
    },


    
})
module.exports=image;