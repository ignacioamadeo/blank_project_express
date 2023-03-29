//Llamado y configuración del paquete de Express:
const express = require('express');
const app = express();
app.use(express.static(__dirname)); //__dirname establece como ruta principal donde esta este archivo (app.js)
app.set("views", "./src/public/views"); //El ./ establece que buscas algo en la misma carpeta que este archivo.


//Ejemplo 1 ruta:
app.get ("/", (req, res) => {
    res.send("Hello world") //the res.send() method in Express is used to send a response back to the user explorer with a string, buffer, or JSON object. 
}) 

//Ejemplo 2 ruta:
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/views/home.html"); //the res.sendFile is used to send an html file to the client.
});

//Exporto todo lo ejecutado por app.js al index.js para que lo ejecute el servidor:
module.exports = app;
