const express = require('express');
const router = express.Router();


router.get('/calzado', (req,res) => {
    res.send('Calzado');
})

router.get('/pantalon', (req,res)=> {
    res.send('Pantalon');
})

router.get('/reloj', (req,res)=> {
    res.send('Reloj');
})

module.exports = router;