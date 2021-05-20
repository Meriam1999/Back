const mongoose =require('mongoose');
const image = new mongoose.Schema({

   
    CodeBase64: {
        type:String,
        required:true,
        trim:true
    },


    
})
module.exports= mongoose.model("imagee",image)