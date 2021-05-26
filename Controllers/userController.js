
const User= require('../Models/userModel');
const validate = require('../Models/userModel')
const bcrypt = require('bcrypt');
const expert= require ('../Models/expert')

module.exports = {

   
    

    //**AJOUT D'UN UTILISATEUR **/
    addUser:  async (req,res)=>{
        // First Validate The Request
        const { error } = validate(req.body);
        if (error) 
        {
        return res.status(400).send(error.details[0].message);
        }
          // Check if this user already exisits
        let users = await User.findOne({Email:req.body.Email});
        let a = await User.findOne({Nom_utilisateur:req.body.Nom_utilisateur})
        
     if (users) {
        return res.status(400).send('your email must be unique ');
        
    }
    else 
    if (a)
    {
        return res.status(400).send('Nom dutilisateur  must be unique ');
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
            Numero_telephone:req.body.Numero_telephone,
            etat_abonné :req.body.etat_abonné
            
        });
        const a1 = users.save();
        try { 
           
        
            res.json("ajout avec succee");
            console.log(' ajout avec succes ');
        }catch(err){ 
            console.log(' il ya une erroooor !! ', err );
            }
            console.log("user ajouté")
            this.tester(req,res) ; 
            
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
                Numero_telephone:req.body.Numero_telephone, 
                etat:req.body.etat, 
                


               
            },
            function(err,list){
                if (err){
                    res.json({state : 'no', msg :'error'+err})
                }else{
                    res.json({state : 'ok',msg:'done'}) 
                }
            }
        )}, 

        Auth:  async (req,res) => {
            try {
                const user = await User.findOne({Email:req.body.Email});
                const validPassword = user.Mot_de_passe===req.body.Mot_de_passe
                if (!validPassword )
                {
                    console.log("heyyyy pasww")
                    return res.status(400).send("mot de passe incorrecte !");
                }
                if (user && validPassword)
                {   
                    console.log("hey")
                    return res.json("user found!")
                }
              
                }
            catch (err) 
            {
                console.log(err)
            }
                    
            return res.status(400).send("Email incorrecte");  

                 
            
        } 
            
        }  
        
         


        
