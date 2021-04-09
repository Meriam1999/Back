const subscriber= require('../Models/subscriberModel')
module.exports={
     //** AJOUT D'UN ABBONNEE**/
     ajoutersubscriber: function(req,res){
        const subscriber1 = new subscriber(
            {   
                Etat_subscriber:req.body.Etat_subscriber,
                date_inscription:req.body.date_inscription,
                adresse:req.body.adresse,
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
        subscriber1.save(function
            (err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            }
            else{
                res.json({state:'ok',msg:'aboonnee ajoutee'})
            }
        })
    },

    //** AFFICHAGE D'UN ABBONNEE **/
    affichersubscriber: (req,res) =>{
        subscriber.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

    //** SUPPRESSION D'UN subscriber **/
    supprimersubscriber: (req,res)=>{
        subscriber.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },

     //** MISE A JOUR D'UN subscriber **/
     Updatesubscriber : function(req,res){
        subscriber.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                Etat_subscriber:req.body.Etat_subscriber,
                date_inscription:req.body.date_inscription,
                adresse:req.body.adresse,
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
