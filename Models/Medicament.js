const mongoose =require('mongoose');
//The function trim returns the string without white spaces
const user = require('./PrduitModel');

const FormulaireOrdonnance = new mongoose.Schema({

   
    expediteur: {
        type:String,
        required:true,
        trim:true

    },

    contenu:  {
        type:String,
        required:true,
        trim:true
    },

    approuved: {
        type:Boolean,
        default:false
    },

   

}), 

 medicSchema =user.discriminator('medicament',new mongoose.Schema ({

    
    

    Dosage : { 
        type : String,
        required : true,
         trim :true  } , 
    
    
    DateFabrication : {
        type :Date , 
        required : true 
    }, 
    DateExpiration : {
        type:Date , 
        required : true 
    },

    FormulaireOrdonnance:[FormulaireOrdonnance],

    FormulaireOrdonnance: [
        { 
            expediteur: {
            type:mongoose.Schema.Types.ObjectId, 
            ref :'exp'
            },

            contenu: {
            type:mongoose.Schema.Types.ObjectId, 
            ref:'contenu'
            },

            approuved: {
            type:mongoose.Schema.Types.ObjectId, 
            ref:'approuved'
           
         }

    }],

}
)
); 

module.exports=medicSchema;