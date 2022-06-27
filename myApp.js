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


























 module.exports = app;
