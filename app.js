var express = require('express');
var app = express();
app.get('/*', function(req, res){
   res.send("Welcome V2.0");
});
app.listen(process.env.PORT || 3000);
