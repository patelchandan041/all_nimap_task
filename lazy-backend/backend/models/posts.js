const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    tital:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true   
    },
    Date:{
          type:Date,
          default:Date.now
    }
})

module.exports =  mongoose.model('posts',PostSchema);