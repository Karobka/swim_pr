var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var records = require('./records_db');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//serve the HTML/CSS/JS files found in 'public'
app.use(express.static('public'));


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

//READ swimrs endpoint
app.get('/getitems', function(req, res){
    res.json(records);
    res.status(200 + "Records retrieved...");
});

//READ swimr events endpoint
app.get('/getevents/:swimrId', function(req, res){
    var tempid = parseInt(req.params.swimrId);
    for (var i = 0; i < records.length; i++ ){
        if (tempid === records[i].swimrId) {
            res.status(200).json(records[i].swim_history);
            console.log('Success, records found');
        }
    }
});


//params is from the url parameter
//body is from the object that is sent from user input

//UPDATE swimrName endpoint
app.put('/swimrupdate/:swimrId', function(req, res){
    var tempid = parseInt(req.params.swimrId);
    for (var i = 0; i < records.length; i++ ){
        if (tempid === records[i].swimrId) {
            records[i].swimrName = req.body.swimrName;
            console.log('Success, record updated');
        }
    }
    console.log(tempid);
    res.status(200).json(records);
    res.json("Record updated...");
});

//DELETE swimr endpoint
app.delete('/swimrdel/:swimrId', function (req, res){
    //console.dir(req);
    //console.log("yoyoyoyo" + Object.keys(req.params.swimrId));
    var tempid = parseInt(req.params.swimrId);
    for (var i = 0; i < records.length; i++ ){
        if (tempid === records[i].swimrId) {
            records.splice(i, 1);
            console.log('Success, record found and deleted');
        }
    }
    console.log(tempid);
    res.status(200).json(records);
});

//I'm listening...
app.listen(3006, function() {
    console.log('Listening on 3006');
});