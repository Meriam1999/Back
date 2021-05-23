
const User= require('../Models/userModel');
const validate = require('../Models/userModel')
const bcrypt = require('bcrypt');

module.exports = {

   
    

    //**AJOUT D'UN UTILISATEUR **/
    addUser:  async (req,res)=>{
        // First Validate The Request
        const { error } = validate(req.body);
        if (error) {
        return res.status(400).send(error.details[0].message);
         }
          // Check if this user already exisits
        let users = await User.findOne({Email:req.body.Email});
     if (users) {
        return res.status(400).send('That user already exisits!');
    }
     else {
         
            const users =  new User({
            Nom:req.body.Nom,
            Prenom:req.body.Prenom,
            Nom_utilisateur:req.body.Nom_utilisateur,
            Mot_de_passe:req.body.Mot_de_passe,
            Photo_profile:req.body.Photo_profile,
            Genre:req.body.Genre,
            Email:req.body.Email,
            Numero_telephone:req.body.Numero_telephone
           
        });
        const a1 = users.save();
        try {
           
        
            res.json("ajout avec succee");
            console.log(' ajout avec succes ');
            
            }catch(err){ 
            console.log(' il ya une erroooor !! ', err );
            }
            console.log("user ajouté")
         
        }
    },
    //** AFFICHAGE LA LISTE DES UTILISATEURS**/
    listUser: (req,res) =>{
        User.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
            console.log('!!!!!user not added') ;

        }
        )},
    //** AFFICHAGE UN UTILISATEUR A PARTIR DE SON  TITRE **/
    afficherUser: (req,res) =>{
        User.find({Nom:req.body.Nom},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
        

    //** RECUPERATION D'UN UTILISATEUR A PARTIR DE SON ID**/
    getbyid :(req,res)=>{
        User.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },

    //** SUPPRESSION D'UN UTILISATEUR A PARTIR DE SON ID**/
    suprimerUser : (req,res)=>{
        User.findOneAndRemove({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
              res.json("Delete suceeded") 
            }
        })  
      },
      Supprimer: (req,res) =>{
        User.remove({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

      //** MISE A JOUR D'UN UTILISATEUR A PARTIR DE SON ID**/
      UpdateUser : function(req,res){
        User.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {
                Nom:req.body.Nom,
                Prenom:req.body.Prenom,
                Nom_utilisateur:req.body.Nom_utilisateur,
                Mot_de_passe:req.body.Mot_de_passe,
                Photo_profile:req.body.Photo_profile,
                Genre:req.body.Genre,
                Email:req.body.Email,
                Numero_telephone:req.body.Numero_telephone
               
            },
            function(err,list){
                if (err){
                    res.json({state : 'no', msg :'error'+err})
                }else{
                    res.json({state : 'ok',msg:'done'}) 
                }
            }
        )}, 

        Auth: function(req,res){
           User.findOne({Email:req.body.Email},function(err,list){
                if (err){
                    console.log("email invalide")
                }else{
                    console.log(list)
                    //lezem faza te3 cryptage ici 
                     if (req.body.Mot_de_passe===list.Mot_de_passe){
                         res.json({state:"ok",msg:"user trouvé",list})
                     }else{
                         res.json({state:"no",msg:"mot de passe invalide", list:null})
                     }
                }
            }
            
            
            
            
            )
        
        } 


        
}