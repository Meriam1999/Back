const express= require('express');
const router=express.Router();
const ReclamationController = require('../Controllers/reclamationController');

//* AJOUTER EXPERT*/
router.post('/ajouter',ReclamationController.ajouterReclamation);// ca marche 

//* AFFICHER LES ADMINS*/
router.get('/afficher',ReclamationController.afficherReclamation); //ca marche

//* SUPPRESSION D'UN EXPERT */
router.delete('/supprimer/:id',ReclamationController.supprimerReclamation); // ca marche 

//* MISE A JOUR D'UN EXPERT */
router.put('/modifier/:id',ReclamationController.modifierReclamation);// ca marche 

module.exports= router;
