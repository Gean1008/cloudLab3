'use strict';

const express = require('express');

//Constants
const PORT = 8080;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/',(req, res) => {
  let firstDate = Date.now();

  for (let i = 0; i < 5000000; i++) {
    Math.sqrt(Math.random());
  }

  let diff = Date.now() - firstDate;
  
  var os = require("os");
  res.send('Hello world ' + os.hostname() + '\n' + diff + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);