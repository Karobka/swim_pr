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

//Records constructor function
function Records(){
    this.swimrId= 111;
}
//creating addswimr method
Records.prototype.addswimr = function(name){
    this.swimrId++;
    this.item =  {
        swimrId: this.swimrId,
        swimrName: name,
        swimr_history: []
    };
    //Push to the database
    records.push(this.item);
    return this.records;
}

var newrecords = new Records();

//CREATE endpoint
app.post('/addswimr/:name', function (req, res) {
    newrecords.addswimr(req.params.name);
    res.status(201).json(records);
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

//I'm listening...
app.listen(3006, function() {
    console.log('Listening on 3006');
});