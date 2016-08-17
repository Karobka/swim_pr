var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var records = require('./records_db');

//serve the HTML/CSS/JS files found in 'public'
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

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
    res.status(200 + "Recordsd retrieved...");
});

//UPDATE endpoint
app.put('/recitems/+itemId', function(req, res){

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