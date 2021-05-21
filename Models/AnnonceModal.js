

const mongoose = require('mongoose');
const Schema =mongoose.Schema
const Image = new Schema({



    CodeBase64: {
        type:String,
        required:true,
        trim:true///////////slkfslmkdlmsq////*
    },
})


const annonceSchema = mongoose.model('annonce',new mongoose.Schema(
{
        
    Titre:{
        type:String,
        required:true,
        trim:true
         },

    Description :{
        type:String,
        required:true,
        trim:true
    },
    

    Gouvernorat: {
        type: String,
        required:true,
        trim:true
    },

    Ville : {
        type:String , 
        required:true , 
        trim :true 
    },

   


    Etat1Anononce: {
        type: [{
        type: String,
        enum: ['En_attente_Expert', 'Validé_Expert', 'Rejeté_Expert']
        }],
        default: ['En_attente_Expert']
    },

    Etat2Anononce: {
        type: [{
        type: String,
        enum: ['resolue', 'offerte', 'vendue','irrésolu']
        }],
        default: ['irrésolu']
    },

    Prix:{
        type:String,
        required:true,
        trim:true
    },

    Annonce_picture:{
        type:String,
        required:false,
        trim:true
    },
    // date de creation de l'annonce 
    Date_Annonce : { 
        type : Date, 
        default : Date.now 
    },
// lezem naamlou controle wa9te yabaath lordonnance llexpert wyvalideha lexpert yet3te el num tel . 
//el phone number yothher  w chat yother kif lexpert a validé lordonnace (ken fil medicament) !!!
    Phone_Number:{
        type:Number,
        required:true,
        trim:true
                    },

    TypeAnnonce: [{
        type: String,                                                                       
        enum: ['Offre Volontaire/Prix Symbolique', 'Demande'],
        required:true
    }],

    Image: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
    }],
  

}
))
    

module.exports=annonceSchema;





