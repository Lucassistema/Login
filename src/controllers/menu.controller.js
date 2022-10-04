const menu = {}
const controller = {}
controller.menu = (req, res)=>{ 
    res.render('menu',{ principal:"texto"})
}

module.exports = controller;
