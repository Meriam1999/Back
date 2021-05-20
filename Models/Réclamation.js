const mongoose =require('mongoose');
const reclamation = new mongoose.Schema({

   
    Titre_réclamation: {
        type:String,
        required:true,
        trim:true

    },


    Contenu:  {
        type:String,
        required:true,
        trim:true

    },


    Date: {
        type:Date ,
        default : Date.now

    }
})
module.exports=reclamation;