
const admin = require('../Models/expertModel')
module.exports={

    //** AJOUT D'UN EXPERT **/
    ajouterExpert: function(req,res){
        const expert1 = new admin(
            {   
                dateInscription :req.body.dateInscription,
                username:req.body.username,
                password:req.body.password,
                name:req.body.name,
                surname:req.body.surname,
                profile_picture:req.body.profile_picture,
                sexe:req.body.sexe,
                email:req.body.email,
                phone_number: req.body.phone_number
            }
        )
        expert1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            }
            else{
                res.json({state:'ok',msg:'admin ajouter'})
            }
        })
    },

    //** AFFICHAGE D'UN EXPERT **/
    afficherAdmin: (req,res) =>{
        expert1.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
   
    //** SUPPRESSION D'UN EXPERT **/
    supprimerAdmin: (req,res)=>{
        expert1.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },

    //** MISE A JOUR D'UN EXPERT**/
    UpdateAdmin : function(req,res){
        expert1.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                dateInscription :req.body.dateInscription,
                username:req.body.username,
                password:req.body.password,
                name:req.body.name,
                surname:req.body.surname,
                profile_picture:req.body.profile_picture,
                sexe:req.body.sexe,
                email:req.body.email,
                phone_number: req.body.phone_number
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