const express= require('express');
const router=express.Router();
const NotificationController = require('../Controllers/notificationController');

//* AJOUTER EXPERT*/
router.post('/add',NotificationController.ajouterNotification);// ca marche 

//* AFFICHER LES ADMINS*/
router.get('/afficher',NotificationController.afficherNotification); //ca marche

//* SUPPRESSION D'UN EXPERT */
router.delete('/delete/:id',NotificationController.supprimerNotification); // ca marche 

//* MISE A JOUR D'UN EXPERT */
router.put('/update/:id',NotificationController.UpdateNotification);// ca marche 

module.exports= router;
