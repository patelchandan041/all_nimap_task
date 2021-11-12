const express = require("express")
const router = express.Router();
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require('dotenv/config');
const JWT_SECRET = process.env.SECRET_KEY
const requireLogin =require('../middleware/requireLogin')

router.get('/protected',requireLogin,(req,res) =>{
    res.send("hello user")
})

router.post('/signup',(req,res) =>{
  const {name,email,password} = req.body
  if(!name || !email || !password){
     return res.status(422).json({error:"fill teh all details properly"})
  }
  User.findOne({email:email})
  .then((saveduser)=>{
      if(saveduser){
        return res.status(422).json({error:"this email already registerd"})
      }
      bcrypt.hash(password,12)
       .then(hashedpassword =>{
        const user = new User({
            name,
            email,
            password:hashedpassword
        })
        user.save()
        .then(user =>{
            res.json({message:"successfully registeres"})
        })
        .catch(err =>{
            console.log(err)
        })

      })
 
  })
})

router.post('/signin',(req,res) =>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(422).json({error:"plzz fill the all details"})
    }

    User.findOne({email:email})
    .then(saveduser =>{
        if(!saveduser){
          return  res.status(422).json({error:"user does not registered with this email"})  
        }
        bcrypt.compare(password,saveduser.password)
        .then(doMatch =>{
            if(doMatch){
               // res.json({message:"user sign in succesfully"})
               const token= jwt.sign({_id:saveduser._id},JWT_SECRET)
               const {_id,name,email} = saveduser
               res.json({token,user:{_id,name,email}})
            }
            else{
                  res.status(422).json({error:"user does not registered with this email"})  
            }
        })
       .catch(err =>{
           console.log(err)
       })
    })
})
module.exports = router;