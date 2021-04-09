
const admin = require('../Models/adminModel')
module.exports={

    //** AJOUT D'UN ADMIN **/
    ajouterAdmin: function(req,res){
        const admin1 = new admin(
            {   
                etat_admin:req.body.etat_admin,
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
        admin1.save(function(err){
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
    afficherAdmin: (req,res) =>{
        admin.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
   
    //** SUPPRESSION D'UN ADMIN **/
    supprimerAdmin: (req,res)=>{
        admin.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },

    //** MISE A JOUR D'UN ADMIN **/
    UpdateAdmin : function(req,res){
        admin.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                etat_admin:res.body.etat_admin,
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