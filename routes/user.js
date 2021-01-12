const express = require('express');
const router = express.Router();

//localhost:3000/user + lo que ponga en el primer parametro
//localhost:3000/user

router.get ('/', (req,res)=>{
    res.send("estoy en la ruta user")
})

router.get ('/altura', (req,res)=>{
    res.send("con altura")
})

router.get ('/edad', (req,res)=>{
    res.send("mi edad")
})




module.exports = router;