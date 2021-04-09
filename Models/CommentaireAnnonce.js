const mongoose =require('mongoose');

var commentaireAnnonceSchema = new mongoose.Schema('commentaire',new mongoose.Schema({

    pseudo : { type : String, match: /^[a-zA-Z0-9-_]+$/ },

    contenu : { type : String},

    date : { type : Date, default : Date.now }
  }))

  
module.exports=commentaireAnnonceSchema;
