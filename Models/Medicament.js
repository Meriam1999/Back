const mongoose =require('mongoose');
//The function trim returns the string without white spaces
const user = require('./PrduitModel');
const {Schema, model} = require("mongoose")

const FormulaireOrdonnance = new Schema({

   
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
        required : true,
        max : Date.now 
    }, 
    DateExpiration : {
        type:Date , 
        required : true ,
        min : Date.now 
    },

    Chercher : { 
        type: [{
            type: String,
            required:true , 
            enum: ['Medicament_chercher','Medicament_vendre ']
            }],
            default: ['Medicament_chercher']
    },

    FormulaireOrdonnance:[FormulaireOrdonnance],

    FormulaireOrdonnance: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FormulaireOrdonnance",
    }],
    

}
)

);
function validateDate(Medicament) {
        const schema = {

            DateFabrication: Joi.string().max(Date.now).required(),
            DateExpiration: Joi.string().min(Date.now).required()
        };
        return Joi.validate(Medicament,schema);
    }

    exports.validate = validateDate;

    module.exports= medicSchema ;