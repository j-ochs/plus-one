const express = require('express');
const app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/test.html'));
  //res.send('Hello World!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})