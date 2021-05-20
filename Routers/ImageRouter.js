const express= require('express');
const router=express.Router()
const image = require('../Controllers/imageController');

//* AJOUTER EXPERT*/
router.post('/ajouter',image.ajouterImage);// ca marche 

//* AFFICHER LES ADMINS*/
router.get('/afficher',image.afficherImage); //ca marche

//* SUPPRESSION D'UN EXPERT */
router.delete('/supprimer/:id',image.supprimerImage); // ca marche 

//* MISE A JOUR D'UN EXPERT */
router.put('/modifier/:id',image.modifierImage);// ca marche 

module.exports= router;
