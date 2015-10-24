var express = require("express");
var app = express();


/* var mongoUri = process.env.MONGOLAB_URI || proces.env.MONGOHQ_URL ||
                  'mongodb://localhost:27017/pickitup';


var mongo = require('mongodb');

var MongoClient = mongo.MongoClient;


var db = mongo.Db.connect(mongoUri, function(error, databaseConnection) {
    db = databaseConnection;
   
   }); */




app.all('*', function(req,res,next) {
     res.header("Access-Control-Allow-Origin", "app/views");
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header("Access-Control-Allow-Headers", "PUT, GET, POST, DELETE, OPTIONS");
     next();

     });


app.use(express.static('app'));
app.set('views', (__dirname, 'app/views'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
         res.render('index.html');
});

app.post("/fromTo", function(req, res) {
   var from = req.body.from;
   var to = req.body.to;

   res.render('withMap.html', {locals: { data : {from: from, to: to} } });
   
 });





var port = Number(process.env.PORT || 5000);



app.listen(port, function() {

  var t = 1;

 });
