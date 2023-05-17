const express = require('express');
const Posts = require('../models/repairPosts');
const bodyParser = require('body-parser');
const router = express.Router();
const Completed = require('../models/repairCompleted');

//save posts
router.post('/repair/save', (req,res) => {
    let newPost = new Posts(req.body);
    newPost.save()
        .then(savedPost => {
            return res.status(200).json({
                success: "Posts saved successfully",
                post: savedPost
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err.message
            });
        });
});

//get posts 
router.get('/getRepairs', (req, res) => {
    Posts.find()
        .then(posts => {
            return res.status(200).json({
                success:true,
                existingPosts: posts
            });
        })
        .catch(err => {
            return res.status(400).json({
                error:err
            });
        });
});

//update posts
router.put('/repair/update/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({ success: "Updated Successfully" });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
});

//delete posts
router.delete('/repair/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Posts.findOneAndDelete({ _id: req.params.id });
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.json({ message: 'Delete Successful', deletedPost });
    } catch (err) {
        return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
});

//get a specific post
router.get('/repair/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Posts.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.status(200).json({
            success: true,
            post
        });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
    }
});

router.get('/repair/markAsComplete/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Posts.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.status(200).json({
            success: true,
            post: {
                title: post.title,
                content: post.content // add the post content here
            }
        });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
    }
});


//mark post as complete
router.put('/repair/markAsComplete/:id', async (req, res) => {
    try {
      const post = await Posts.findById(req.params.id);
      const {repairID, customerName, phoneNum, device, Brand, Model, reason, givenDate, customerAddress, repairPrize} = post;
      const completedPost = new Completed({repairID, customerName, phoneNum, device, Brand, Model, reason, givenDate, customerAddress, repairPrize});
      await completedPost.save();
    //   await Posts.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  });

  // get completed posts
router.get('/repairCompleted', async (req, res) => {
    try {
      const completedPosts = await Completed.find();
      return res.status(200).json({
        success: true,
        completedPosts
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        error: err.message
      });
    }
  });

  //delete completed post
router.delete('/repairCompleted/delete/:id', async (req, res) => {
    try {
      const deletedPost = await Completed.findOneAndDelete({ _id: req.params.id });
      if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      return res.json({ message: 'Delete Successful', deletedPost });
    } catch (err) {
      return res.status(400).json({ message: 'Delete unsuccessful', error: err });
    }
  });  

module.exports = router;
