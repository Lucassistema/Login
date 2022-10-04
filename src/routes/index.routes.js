const express = require('express');
const router = require('express').Router();
const usuariosController = require('../controllers/usuarios.controller');

const controller = require('../controllers/index.controller');

router.get('/index', controller.index);

router.get('/', function(req, res, next){
    res.render('routes/index.routes');
});


router.post('/', async(req,res,next) => {
    try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    console.log(req.body);

    var data = await usuarios.controller.getUserAndPassword(usuario, password);

    if(data != undefined) {
        req.session.id_usuario = data.id;
        req.session.nombre = data.usuario;
        console.log('Datos correctos');
        res.redirect('views/menu')
    } else {
        res.render('views/index', {
            //layout: 'admin/layout',
            error:true
        });
        
        }
    } catch (error) {
        console.log(error);
    }

});


module.exports = router;