const ticketList = require('../models/ticketlist')

exports.getAllPosts = async (req,res) => {
    try {
        const posts = await ticketList.find()
        res.send(posts)
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// GET a specific post by ID
exports.getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.send(post);
    } catch (error) {
      console.error('Error fetching post by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // CREATE a new post
  exports.createPost = async (req, res) => {
    try {
      const newPost = new Post(req.body);
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      console.error('Error creating a new post:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // DELETE a post by ID
  exports.deletePostById = async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).send('Post deleted');
    } catch (error) {
      console.error('Error deleting post by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };