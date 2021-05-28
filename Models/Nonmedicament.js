const mongoose =require('mongoose');
const annonce= require('./AnnonceModal');
const NonMedicament= annonce.discriminator('NonMedicament',new mongoose.Schema ({    
  

    TypeNonmedicament: {
        type: [{
        type: String,
        required:true , 
        enum: ['Mobilier_Medicale', 'Soin_et_Pensement', 'Protection','Autre']
        }],
        default: ['Protection']
    }


  
})
)
    


module.exports=NonMedicament;