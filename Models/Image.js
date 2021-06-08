const mongoose =require('mongoose');
const image = new mongoose.Schema({

   
    name: String , 
    desc:String,
    img : 
    {
        data : Buffer , 
        contentType : String
    }
  

    
})
module.exports= mongoose.model("imagee",image)