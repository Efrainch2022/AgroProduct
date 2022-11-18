const express=require("express")
const router=express.Router();

const {getProducts}=require("../controllers/productsController")//trae la respuesta json desde el controlador

router.route('/productos').get(getProducts)//estabelcemos desde que ruta queremos ver el getProducts

module.exports=router;
