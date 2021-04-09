const mongoose =require('mongoose');
//The function trim returns the string without white spaces
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
   surname:{
        type:String,
        required:true,
        trim:true
    },
    profile_picture:{
        type:String,
        required:false,
        trim:true
    },
    sexe:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone_number:{
        type:String,
        required:true,
        trim:true
    }
    })

module.exports=mongoose.model('User',userSchema);