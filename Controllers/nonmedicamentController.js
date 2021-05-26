
const Nm =require('../Models/Nonmedicament')
module.exports={


        
    //** AJOUT D'UNE RECLAMATION **/
    ajouterTypeNonmedicament: function(req,res){
        const Nm1 = new Nm(
    
            {  
                Nom:req.body.TypeNonmedicament,
                TypeNonmedicament:req.body.TypeNonmedicament 
            }
        )
        Nm1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            
            }else{
                res.json({state:'ok',msg:'NonMedicament ajouter'}) ;
            }
        }
        )
    },


    //** AFFICHAGE D'UNE RECLAMATION **/
    afficherTypeNonmedicament: (req,res) =>{
        Nm.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

   
    //** SUPPRESSION D'UNE RECLAMATION **/
    supprimerTypeNonmedicament: (req,res)=>{
        NM.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
        }
        )  
    },

    Supprimer: (req,res) =>{
        prod.remove({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },


    //** MISE A JOUR D'UNE RECLAMATION**/
    modifierTypeNonmedicament: function(req,res){
        NM.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   Nom:req.body.TypeNonmedicament,
                TypeNonmedicament:req.body.TypeNonmedicament 
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