//Llamo contenido archivo app.js:
const app = require('./src/app')
//Creo el servidor:
const port = process.env.PORT || 1234 
app.listen(port,() => {
    console.log(`server is runnig in port ${port}`);
})
//Ingreso a web por: 0.0.0.0:1234 o 127.0.0.1:1234