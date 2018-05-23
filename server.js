// Instala el servidor express
const express = require ('express');
const path = require ('ruta');

const app = express ();

// Solo sirven los archivos estáticos del directorio dist
app.use (express.static (__dirname + '/ dist'));

app.get ('/ *', función (req, res) {
    
res.sendFile (path.join (__dirname + '/ dist / index.html'));
});

// Inicie la aplicación escuchando en el puerto Heroku predeterminado
app.listen (process.env.PORT || 8080);