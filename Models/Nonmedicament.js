const mongoose =require('mongoose');
const annonce= require('./AnnonceModal');
const NonMedicament= annonce.discriminator('NonMedicament',new mongoose.Schema ({    
  

    TypeNonmedicament: {
        type: [{
        type: String,
        required:true , 
        enum: ['mobilier medicale', 'Soin et Pansement', 'Protection','Autre']
        }],

    }


  
})
)
    


module.exports=NonMedicament;