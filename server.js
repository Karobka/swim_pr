var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var records = require('./records_db');

//serve the HTML/CSS/JS files found in 'public'
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//app.listen(process.env.PORT || 3006);

//constructor function
function Records(newname){
    this.swimrId= 111;
    this.swim_history = [];
}

Records.prototype.add = function(name){
    {
    this.swimrId++;
    this.swimrName = name;
    this.swim_history = [];
    }
}
var newrecords = new Records();

//CREATE endpoint
app.post('/recitems/add/:name', function (req, res) {
    newrecords.add(req.params.name);
    res.status(201).json(records);
    //res.json("Record added " + records.users[0].swim_history[0].swimrName);
});

//READ endpoint
app.get('/getitems', function(req, res){
    res.json(records);
});

//UPDATE endpoint
app.put('/recitems/+itemId', function(req, res){

    res.json("Record updated...");
});

//DELETE endpoint
app.delete('/records/del/+itemId', function (req, res){
    res.json("Record deleted...");
});

app.listen(3006, function() {
    console.log('Listening on 3006');
});