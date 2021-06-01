const mongoose =require('mongoose');
//The function trim returns the string without white spaces
let mongooseHidden = require('mongoose-hidden')()



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
    test : {
      type  :String, 
      
      trim:true,
      hide:true,
      hideJSON: true 
    },
    Nom_utilisateur:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },

    etat: {
        type: [{
        type: String,
        required:true , 
        enum: ['Utilisateur', 'Expert', 'Administrateur']
        }],
        default: ['Utilisateur']
    }, 
   

    
    dateInscription : { 
    type : Date,
    default : Date.now },
    
    

   
    // cryptage
    Mot_de_passe:{   /* controle*/ 
        type:String,
        required:true,
        trim:true,
      
    },
    
    Photo_profile:{
        type:String,
        required:false,
        trim :true , 
        
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
        trim:true,
       
    },
    Numero_telephone:{
        type:String,
        required:true,
        trim:true
    },
    
    })
   
  
    userSchema.plugin(mongooseHidden, { hidden: { _id: true, test: true } })
    
    
  /*adresse*/ 


module.exports=mongoose.model('User',userSchema);