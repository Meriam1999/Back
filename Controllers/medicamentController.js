
const Medicament =require('../Models/Medicament')

module.exports={

    //** AJOUT D'UN ADMIN **/
    ajouterMedicament: function(req,res){
        const Medicament1 = new Medicament(

            {  Nom:req.body.Nom,
               Dosage:req.body.Dosage , 
               DateFabrication:req.body.DateFabrication,
               DateExpiration:req.body.DateExpiration 
            }
        )
        Medicament1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            }
            else{
                res.json({state:'ok',msg:'admin ajouter'})
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