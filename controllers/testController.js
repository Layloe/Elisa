import mongoose from 'mongoose';
const ticketList = require('../models/ticketlist');



// Fetch all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await ticketList.find()
    res.send(posts)
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// CREATE a new post
exports.createPost = async (req, res) => {
  console.log('Request received:', req.body);
  const {
    timeOfDay,
    bloodPressure,
    severity,
    assignedTo,
    status,
    date,
  } = req.body;

  if (!timeOfDay || !bloodPressure || !severity || !assignedTo || !date) {
    return res
      .status(400)
      .json({ error: 'Missing required fields. Please provide all required information.' });
  }

  try {
    const newPost = new ticketList({
      timeOfDay,
      bloodPressure,
      severity,
      assignedTo,
      status,
      date,
    });
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error('Error creating a new post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// Get a specific post by ID
exports.getPostById = async (req, res) => {
  const { id } = req.params
  console.log('req id:', req.params.id)

  // Validate objectId
  if (!mongoose.Types.ObjectId.isValid(is)) {
    return res.status(400).json({error: "Invalid post ID"})
  }

  try {
    const post = await ticketList.findById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post)
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// DELETE a post by ID
exports.deletePostById = async (req, res) => {
  try {
    await ticketList.findByIdAndDelete(req.params.id);
    res.status(200).send('Post deleted');
  } catch (error) {
    console.error('Error deleting post by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  };
}
// UPDATE a post by ID
exports.updatePost = async (req, res) => {
  try {
   const updatePost = await ticketList.findByIdAndUpdate(req.params.id, req.body, { new: true})
   if (!updatePost) {
    return res.status(404).send('Post not found')
   }
    res.send(updatePost)
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  };
};
