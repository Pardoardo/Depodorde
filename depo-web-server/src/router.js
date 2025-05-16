function StartRouter(server){
    server.get('/', function(req, res) {
        res.render('pages/index');
    });

}

module.exports = {
    StartRouter
}