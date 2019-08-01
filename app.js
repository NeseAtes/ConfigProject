var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('underscore'); //arrayler ve objeler üzerinde işlem yapabilmek için

//req ile gelen istekleri okumak için
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/routes.js')(app);
app.use(express.static('public'))

/*
app.post("/apps/:id", function(req, res){
    var body = _.pick(req.body, "app_name", "version");
    var id = req.params.id;
    res.send(body.app_name + "id = " + id);
})*/


app.listen(3000);