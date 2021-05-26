
const image =require('../Models/Image')
module.exports={


        
    //** AJOUT D'UNE RECLAMATION **/
    ajouterImage: function(req,res){
        const image1 = new image(
    
            {  
                CodeBase64:req.body.CodeBase64
            }
        )
      
        image1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            
            }else{
                res.json({state:'ok',msg:'Image ajouter'})
            }
        }
        )
    },


    //** AFFICHAGE D'UNE RECLAMATION **/
    afficherImage: (req,res) =>{
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
    supprimerImage: (req,res)=>{
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
    modifierImage: function(req,res){
        image.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                CodeBase64:req.body.CodeBase64
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