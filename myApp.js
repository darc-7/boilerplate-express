let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html';

console.log('Hello World');

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


























 module.exports = app;
