
const http=require ('http');
const express= require('express');
const mongoose=require('mongoose');
const session = require('express-session');
const url='mongodb://localhost/mydb';

const app=express();
//on se connecte a mongoose avec cet url , =true pour forcer la connexion a ce new url si non il prend l'ancienne url de mongoose
//conn instantiation de la connexion a la base de donnee 
//.on est comme eventlistener , s'il ya envoi de donnee on execute la fct function()..

mongoose.connect(url,{useNewUrlParser:true});
const conn=mongoose.connection
conn.on('open',function(){
    console.log('connected...');
});
// Session 
app.use(session({
    secret: ' keyboard cat pour chiffre les cookies',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

//pour les messages flash

//pour les redirections de sécurité, lorsque le serveur subit un modification
//alors redirection automatique vers la page de login



app.use(express.json());

const userRouter=require('./Routers/userRouter');
app.use('/user',userRouter);

const adminRouter = require('./Routers/adminRouter');
app.use('/admin',adminRouter);

const expertRouter= require('./Routers/expertRouter');
app.use('/expert',expertRouter);

const annonceRouter = require('./Routers/annonceRouter');
app.use('/annonce',annonceRouter);

const commentaireRouter = require('./Routers/commentaireRouter');
app.use('/commentaire',commentaireRouter);

const reclamation = require('./Routers/reclamationRouter');
app.use('/reclamation',reclamation);

const notificationRouter = require('./Routers/notificationRouter');
app.use('/notification',notificationRouter);

const adresse = require('./Routers/adresseRouter');
app.use('/adresse',adresse);

const image = require('./Routers/ImageRouter');
app.use('/image',image);

const tags = require('./Routers/tagsRouter');
app.use('/tags',tags);

const formO = require('./Routers/formulaireOrdonnanceRouter');
app.use('/formulaireOrdonnance',formO);

const cat = require('./Routers/categorieRouter');
app.use('/categorie',cat);

const medicament = require('./Routers/medicamentRouter');
app.use('/medicament',medicament);




// connecter au port 9000
app.listen(8000,()=>{
    console.log('Server started');
});

//faut faire model de mode : offre volontaire , prix symbolique