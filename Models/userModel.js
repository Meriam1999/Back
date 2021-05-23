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
        trim:true,
        minlength: 5,
        maxlength: 50,
        unique:true
    },
   

    
        dateInscription : { 
        type : Date,
        default : Date.now },
    
    

   
    // cryptage
    Mot_de_passe:{   /* controle*/ 
        type:String,
        required:true,
        trim:true,
        minlength: 5,
        maxlength: 50
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
        trim:true,
        minlength: 5 , 
        maxlength:255
    },
    Numero_telephone:{
        type:String,
        required:true,
        trim:true
    },
    
    })
    function validateUser(User) {
        const schema = {

            Nom_utilisateur: Joi.string().unique().min(5).max(50).required(),
            Email: Joi.string().min(5).max(255).required().email(),
            Mot_de_passe: Joi.string().min(5).max(255).required()
        };
        return Joi.validate(User, schema);
    }

    exports.validate = validateUser;
    
  /*adresse*/ 


module.exports=mongoose.model('User',userSchema);