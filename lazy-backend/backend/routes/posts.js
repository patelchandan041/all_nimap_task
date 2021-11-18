const express = require('express');
const router = express.Router();
const Post = require('../models/posts')


router.get('/', async(req,res) =>{
    try{
        const post = await Post.find()
        res.json(post)
    }catch(err){
        res.json({message:err})
    }
  });


  router.post('/', async(req,res) =>{
   const post = new Post({
       tital:req.body.tital,
       description:req.body.description
   });

   try{
    const savedPost = await post.save()
     res.json(savedPost)
   }catch(err){
       res.json({message:err})
   }
});
router.get('/:postId', async (req,res) => {
    try{
     const post = await Post.findById(req.params.postId);
     res.json(post);
    }catch(err){
        res.json({ message:err })
    }
})
router.delete('/:postId', async (req,res) => {
   try{
     const removePost  = await Post.deleteOne({_id: req.params.postId})
     res.json(removePost)
   }catch(err){
       res.json({message:err})
   }
});

router.put('/:postId', async (req, res) => {
    try{
      const updatedPost  = await Post.updateOne(
          {_id: req.params.postId},
        { $set: { tital:req.body.title,description:req.body.description } },
        // { $set: {description:req.body.description } }
        );
      res.json(updatedPost)
    }catch(err){
        res.json({ message:err });
    }
 });

module.exports = router;