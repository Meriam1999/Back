const express= require('express');
const router=express.Router();
const nomedicament =require('../Controllers/nonmedicamentController');

//* AJOUTER MEDICAMENT */
router.post('/ajouter',nomedicament.ajouterTypeNonmedicament); // ca marche 

//* AFFICHER LES MEDICAMENTS */
router.get('/afficher',nomedicament.afficherTypeNonmedicament);// ca marche 

//* SUPPRESSION  MEDICAMENTS */
router.delete('/supprimer/:id',nomedicament.supprimerTypeNonmedicament);// ca marche

//* SUPPRESSION TOUS LES MEDICAMENTSs*/
router.delete('/supprimer',nomedicament.Supprimer); // ca marche

//* MISE A JOUR MEDICAMENT */
router.put('/modifier/:id',nomedicament.supprimerTypeNonmedicament); // ca marche 

module.exports= router;
