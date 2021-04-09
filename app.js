
const http=require ('http');
const express= require('express');
const mongoose=require('mongoose');

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

app.use(express.json());

const userRouter=require('./Routers/userRouter');
app.use('/user',userRouter);

const adminRouter = require('./Routers/adminRouter');
app.use('/admin',adminRouter);

const subscriberRouter = require('./Routers/subscriberRouter');
app.use('/subscriber',subscriberRouter);

// connecter au port 9000
app.listen(7000,()=>{
    console.log('Server started');
});

