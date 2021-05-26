const mongoose =require('mongoose');
//The function trim returns the string without white spaces
const prod = require('./PrduitModel');
const {Schema, model} = require("mongoose")
const FormulaireOrdonnance=require('./FormulaireOrdonnance')
 const medicSchema =prod.discriminator('Medicament',new mongoose.Schema ({


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