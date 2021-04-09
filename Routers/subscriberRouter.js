
const express= require('express')
const router =express.Router()
const subscriberController = require('../Controllers/subscriberController')

//* AJOUTER ABONNEE*/
router.post('/add',subscriberController.ajoutersubscriber);

//* AFFICHER LES ABONNEE */
router.get('/afficher',subscriberController.affichersubscriber);

//* SUPPRESSION D'UN ABONNEE */
router.delete('/delete/:id',subscriberController.supprimersubscriber);

//* MISE A JOUR D'UN ABONNEE*/
router.put('/update/:id',subscriberController.Updatesubscriber);

module.exports=router