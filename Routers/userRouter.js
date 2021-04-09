const express= require('express');
const router=express.Router();

const userController = require('../Controllers/userController');

//get pour recuperer des donnes **AFFICHAGE DES UTILISATEURS**
router.get('/listUser',userController.listUser); //ca marche

//get pour recuperer des donnes **AFFICHAGE D'UN UTILISATEUR PAR SON ID**
router.get('/getbyid/:id',userController.getbyid) // ca marche

// **SUPPRESSION D'UN UTILISATEUR PAR SON ID**
router.delete('/delete/:id',userController.suprimerUser)

// **MISE A JOUR D'UN UTILISATEUR PAR SON ID**
router.put('/update/:id',userController.UpdateUser)

//post pour envoyer des donnes //**AJOUT D'UN UTILISATEUR **/
router.post('/adduser',userController.addUser)
    

module.exports=router;