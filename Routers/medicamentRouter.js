const express= require('express');
const router=express.Router();
const medicament = require('../Controllers/medicamentController');

//* AJOUTER ADMIN */
router.post('/ajouter',medicament.ajouterMedicament); // ca marche 

//* AFFICHER LES ADMINS */
router.get('/afficher',medicament.afficherMedicament);// ca marche 

//* SUPPRESSION D'UN ADMIN */
router.delete('/supprimer/:id',medicament.supprimerMedicament);// ca marche

//* SUPPRESSION De toute la liste des admis*/
router.delete('/supprimer',medicament.Supprimer); // ca marche

//* MISE A JOUR D'UN ADMIN */
router.put('/modifier/:id',medicament.UpdateMedicament); // ca marche 

module.exports= router;
