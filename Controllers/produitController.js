
const image =require('../Models/ProduitModel')
module.exports={


        
    //** AJOUT D'UNE RECLAMATION **/
    ajouterProduit: function(req,res){
        const image1 = new reclamation(
    
            {  
                Nom:req.body.Nom
            }
        )
        image1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            
            }else{
                res.json({state:'ok',msg:'Notification ajouter'})
            }
        }
        )
    },


    //** AFFICHAGE D'UNE RECLAMATION **/
    afficherProduit: (req,res) =>{
        image.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

   
    //** SUPPRESSION D'UNE RECLAMATION **/
    supprimerProduit: (req,res)=>{
        image.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
        }
        )  
    },


    //** MISE A JOUR D'UNE RECLAMATION**/
    modifierProduit: function(req,res){
        image.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
               
                Nom:req.body.Nom
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