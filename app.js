const express = require('express')
const app = express()
const port = 3000
const indexRoutes = require('./routes/index');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const loginRouter = require('./routes/login');

app.use('/', indexRoutes)


app.use('/user', userRouter)

app.use('/product', productRouter)


app.use('/login', loginRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

