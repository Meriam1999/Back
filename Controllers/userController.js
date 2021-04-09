
const User = require('../Models/userModel');

module.exports = {

    //**AJOUT D'UN UTILISATEUR **/
    addUser: (req,res)=>{
        const users = new User({
            username:req.body.username,
            password:req.body.password,
            name:req.body.name,
            surname:req.body.surname,
            profile_picture:req.body.profile_picture,
            sexe:req.body.sexe,
            email:req.body.email,
            phone_number: req.body.phone_number
        })
        try {
            const a1 = users.save();
            res.json(a1);
            console.log(' ajout avec succes ');
        }catch(err){ 
            console.log(' there is an error ', err );
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
        }
        )},

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
        User.findOneAndRemove({_id:req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
              res.json({state : 'ok',msg:'done'}) 
            }
        })  
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
        )},  
}