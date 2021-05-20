const mongoose =require('mongoose');
//The function trim returns the string without white spaces
const user = require('./PrduitModel');
const medicSchema =user.discriminator('medicament',new mongoose.Schema ({
    

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
    }
})
); 

module.exports=medicSchema;