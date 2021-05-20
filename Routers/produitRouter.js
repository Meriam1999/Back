const express= require('express');
const router=express.Router();
const prod = require('../Controllers/produitController');

//* AJOUTER EXPERT*/
router.post('/ajouter',prod.ajouterProduit);// ca marche 

//* AFFICHER LES ADMINS*/
router.get('/afficher',prod.modifierProduit); //ca marche

//* SUPPRESSION D'UN EXPERT */
router.delete('/supprimer/:id',prod.supprimerProduit); // ca marche 

//* MISE A JOUR D'UN EXPERT */
router.put('/modifier/:id',prod.modifierProduit);// ca marche 
module.exports= router;
