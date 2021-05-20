
const tag =require('../Models/Image')
module.exports={


        
    //** AJOUT D'UNE RECLAMATION **/
    ajouterTag: function(req,res){
        const tag1 = new (
    
            {  
                contenu:req.body.contenu
            }
        )
        tag1.save(function(err){
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
    affichertag: (req,res) =>{
        tag.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

   
    //** SUPPRESSION D'UNE RECLAMATION **/
    supprimertag: (req,res)=>{
        tag.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
        }
        )  
    },


    //** MISE A JOUR D'UNE RECLAMATION**/
    modifierTag: function(req,res){
        tag.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                contenu:req.body.contenu
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