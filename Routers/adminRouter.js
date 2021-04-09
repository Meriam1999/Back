const express= require('express');
const router=express.Router();
const adminController = require('../Controllers/adminController');

//* AJOUTER ADMIN */
router.post('/add',adminController.ajouterAdmin);

//* AFFICHER LES ADMINS */
router.get('/afficher',adminController.afficherAdmin);

//* SUPPRESSION D'UN ADMIN */
router.delete('/delete/:id',adminController.supprimerAdmin);

//* MISE A JOUR D'UN ADMIN */
router.put('/update/:id',adminController.UpdateAdmin);

module.exports= router;
