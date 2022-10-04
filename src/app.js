const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const conn = require('./database/db');
// const database = app.use(require('database/db'));


const app = express();
const port = process.env.PORT || 3000;
app.use(require('./routes/menu.routes'));


//SETTINGS
app.use(morgan('common'));
//app.set(express.static);
app.set(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs');
//app.set('view engine','ejs');

// SOLO SE PUEDE UTILIZAR UN SOLO
// MOTOR DE PLANTILLA

// index
app.get('/', (req, res)=>{
    res.render('index', {titulo:"Este es el motor de HBS"})
    console.log('Esta es la ruta del INDEX');
});


// menu
app.get('/menu', (req, res)=>{
    res.render('menu', {principal:"Este es el motor de PUG"})
    console.log('Esta es la ruta del menu');
});

app.listen(port, ()=> console.log(`Bienvenido, este es el servidor ${port}`));
