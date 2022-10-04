const index = {}
controller.index = (req, res)=>{ // function controller
    res.render('/', 'Bienvenidos al INDEX')

}
module.exports = controller;