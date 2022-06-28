let bodyParser = require("body-parser");
let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html';

console.log('Hello World');



app.use((req,res,next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

/*app.get('/',function(req, res) {
  res.send('Hello Express');
})*/

app.get('/',function(req, res) {
  res.sendFile(absolutePath);
})

app.use('/public/', express.static(__dirname + '/public'));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase')
    res.json({message: "Hello json".toUpperCase()});
  else
    res.json({message: "Hello json"})
  });

app.get('/now', (req,res,next) =>{
  req.time = new Date().toString();
  next();
},(req,res)=>{
  res.send({time: req.time});
});

app.get('/:word/echo', (req, res)=>{
  res.json({echo: req.params.word});
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/name', (req,res)=>{
  res.json({name: req.query.first+' '+req.query.last});
});

/*app.post('/name', (req,res)=>{
  res.json({name: req.body.first+' '+req.body.last});
});*/

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});


























 module.exports = app;
