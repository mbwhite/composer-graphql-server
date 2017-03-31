var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

//app.use(express.bodyParser());

app.post('/*', function(req, res) {
   // print to console
   console.log(req.url);
   console.log(req.body);

   // just call res.end(), or show as string on web
   res.send(JSON.stringify(req.body, null, 4));
});

app.put('/*', function(req, res) {
   // print to console
console.log(req.url);
   console.log(req.body);

   // just call res.end(), or show as string on web
   res.send(JSON.stringify(req.body, null, 4));
});

app.get('/*', function(req, res) {
   // print to console
   console.log(req.body);
console.log(req.url);
   // just call res.end(), or show as string on web
   res.send(JSON.stringify(req.body, null, 4));
});


app.listen(3000);