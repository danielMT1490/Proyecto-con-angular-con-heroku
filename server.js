//server.js
const express = require ('express');
const app = express ();
const path = require ('ruta');
app.use (express.static ('./ dist / helloworld'));
app.get ('/ *', función (req, res) {
  res.sendFile (path.join ('./ dist / helloworld / index.html'));
});
app.listen (process.env.PORT || 8080);