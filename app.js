var express = require('express');
var app = express();
console.log("Carregando paginas")
const dados2 =  require('./Transform');


app.get('/', (req, res) => {
//read

  dados2.then(dados => {
  res.json(dados)
})
});


app.listen(3000, function(){});
