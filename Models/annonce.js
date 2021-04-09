const mongoose =require('mongoose');
const annonceSchema = new mongoose.Schema({
    
    authorname:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },

    Description :{
        type:String,
        required:true,
        trim:true
    },

    location: {
        type: String,
    },

    catégorie:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref : "catégorie"
    
        }
    ],

    commentaire:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref :"commentaire"
    }
    ],

    annonce_picture:{
        type:String,
        required:false,
        trim:true
    },
// lezem naamlou controle wa9te yabaath lordonnance llexpert wyvalideha lexpert yet3te el num tel . 
    phone_number:{
        type:String,
        required:true,
        trim:true
                    }
    })

module.exports=mongoose.model('Annonce',annonceSchema);