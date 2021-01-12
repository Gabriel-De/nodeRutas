//requerimos la libreria express
const express = require('express');
//una funcion /metodo de la libreria express que crea las rutas y utilizar las rutas en el archivo principal
const router = express.Router();

//creamos la ruta que queramos
//localhost:3000/
router.get('/', (req,res) => {
    res.send('ruta 1')
})

//localhost:3000/fabrica
router.get('/fabrica', (req,res) => {
    res.send('Ruta fabrica')
})
//localhost:3000/empleados
router.get('/empleados', (req,res) => {
    res.send('Ruta empleados')
})

module.exports= router;