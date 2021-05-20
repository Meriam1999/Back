const mongoose =require('mongoose');
const prod= require('./PrduitModel');
const NonMedicament= prod.discriminator('Medicament',new mongoose.Schema ({
    

        
  

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
    


module.exports=Nonmedicament;