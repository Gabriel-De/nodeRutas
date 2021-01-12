const express = require('express');
const router = express.Router();


//localhost:3000/login/
router.get('/', (req,res)=>{
    //console.log(res.send);
    res.send('entro en el login.js')
})


//localhost:3000/login/si
router.get('/si', (req,res)=>{
   
    res.send('siii')
})

//localhost:3000/login/no/:mensaje
router.get('/no/:mensaje', (req,res)=>{
   let mensaje = req.params.mensaje
   
    console.log(req.params.mensaje)

   res.send(mensaje)
})








module.exports=router;