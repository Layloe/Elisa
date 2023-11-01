const ticketList = require('../models/ticketlist')
// const axios = require('axios');

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
    } = req.body

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
      const post = await ticketList.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.send(post);
    } catch (error) {
      console.error('Error fetching post by ID:', error);
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

  // module.exports = {
  //   getIndex : async (req, res) => {
  //       try {
  //           const tickets = await
  //           TicketList.find()
  //           res.json({ ticketList: tickets, user: req.user });
  //       } catch (err) {
  //           if (err) return res.status(500).json({ error: 'Internal server error' })
  //       }
  //   },
    
  //   createTicket: async (req, res) => {
  //       const newTicket = new TicketList(
  //           {
  //               timeOfDay: req.body.timeOfDay,
  //               bloodPressure: req.body.bloodPressure,
  //               severity: req.body.severity,
  //               assignedTo: req.body.assignedTo,
  //               status: req.body.status
  //           });
  //       try {
  //           const savedTicket = await newTicket.save()
  //           res.json(savedTicket)
  //           console.log(newTicket)
  //           res.redirect("/");
  //       } catch (err) {
  //           if (err) return res.status(500).json({ error: 'Internal server error' })
  //           res.redirect("/");
  //       }
  //   },
// }


