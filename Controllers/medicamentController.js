
const Medicament =require('../Models/Medicament')
const validate=require('../Models/Medicament')
const FormulaireOrdonnance = require('../Models/FormulaireOrdonnance')
module.exports={

    //** AJOUT D'UN ADMIN **/
    ajouterMedicament: function(req,res){
        // First Validate The Request
        const { error } = validate(req.body);
        if (error) 
        {
        return res.status(400).send(error.details[0].message);
        }
        const Medicament1 = new Medicament(
                
            {  
               Nom:req.body.Nom,
               Dosage:req.body.Dosage , 
               DateFabrication:req.body.DateFabrication,
               DateExpiration:req.body.DateExpiration, 
               FormulaireOrdonnance:req.body.FormulaireOrdonnance,
               Chercher:req.body.Chercher
            }
        )
        Medicament1.save(function(err){
            
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            }
            else{
                res.json({state:'ok',msg:'medicament ajouter'})
            }
            
                
                
            
        })


        
    },
    
 
    //** AFFICHAGE D'UN ADMIN **/
    afficherMedicament: (req,res) =>{
        Medicament.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
   
    //** SUPPRESSION D'UN ADMIN **/
    supprimerMedicament: (req,res)=>{
        Medicament.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },

    //** SUPPRESSION de toute la liste */
    Supprimer: (req,res) =>{
        Medicament.remove({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

    //** MISE A JOUR D'UN ADMIN **/
    UpdateMedicament: function(req,res){
        Medicament.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
               Nom:req.body.Nom,
               Dosage:req.body.Dosage , 
               DateFabrication:req.body.DateFabrication,
               DateExpiration:req.body.DateExpiration 
            },
            function(err,list){
                if (err){
                    res.json({state : 'no', msg :'error'+err})
                }else{
                    res.json({state : 'ok',msg:'done'}) 
                   
                }
            }
        )
    } 
 }