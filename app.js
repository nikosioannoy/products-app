const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose")

app.use(express.json()) //Gia diavasma JSON


//Timi vazoume to connection string gia thn vash mas apo MongoDB Atlas.
mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => {console.log("Connection to mongodb established")},
    err => ( console.log("Failed to connect to mongo db", err) )
    ) 

const user = require('./routes/user.route') //Otan sou erxete klisi me /api/user (apo katw akrivos), tote kalese tis diadikasies tou user (diladi user.route)
const userProduct = require('./routes/user.products.routes')

app.use('/api/users', user) //Otan dei /api/user - To paei ston user (pou opws vlepoume apo panw exei oles tis leitourgies tou user.route) 
app.use('/api/user-products', userProduct)    

app.listen(port, () => {
  console.log("Server is up")
})