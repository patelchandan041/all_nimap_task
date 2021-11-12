const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000;
require('dotenv/config');
const cors = require("cors")

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser:true,
    useUnifiedTopology:true
   }).then(() =>{
    console.log(`connection succesfull`)
  }).catch((err) => console.log(err));

  app.use(express.json());
  app.use(cors())

require('./models/user')
require('./models/post')

app.use(require('./routes/auth'));
app.use(require('./routes/post'));
  
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log(`app listening in ${PORT}`)
})