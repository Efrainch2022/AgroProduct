const express=require("express");
const app = express();

app.use(express.json());

//importar rutas
const productos=require("./routes/products")

app.use('/api',productos)//Sujeto a cambios (ruta de navegacion)

module.exports=app