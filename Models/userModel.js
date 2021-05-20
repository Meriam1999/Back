const mongoose =require('mongoose');
//The function trim returns the string without white spaces
const userSchema = new mongoose.Schema({

    Nom:{
        type:String,
        required:true,
        trim:true
    },
    Prenom :{
        type:String,
        required:true,
        trim:true
        
    },
    Nom_utilisateur:{
        type:String,
        required:true,
        trim:true
    },

   
    // cryptage
    Mot_de_passe:{   /* controle*/ 
        type:String,
        required:true,
        trim:true
    },
    
    Photo_profile:{
        type:String,
        required:false,
        trim:true
    },
    Genre: {
        type:[{
            type: String,                                                                       
            enum: ['Homme','Femme'],
           required:true, 
        }],
      
       
    },
    Email:{
        type:String,
        required:true,
        trim:true
    },
    Numero_telephone:{
        type:String,
        required:true,
        trim:true
    },
    
    })
    
  /*adresse*/ 


module.exports=mongoose.model('User',userSchema);