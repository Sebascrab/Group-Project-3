


const { Post, User } = require('../models');


module.exports = {


    getPost(req, res) {
        Post.find()
        .populate('user')
            .then((post) => res.json(post))
            .catch((err) => res.status(500).json(err));
    }, 

    getSinglePost(req, res) {
        Post.findOne({ _id: req.params.Id })
            .select('-__v')
            .then((post) => !post ? 
            res.status(404).json({ message: 'No post with that ID!' })
                : res.json(post)
                )
                .catch((err) => res.status(500).json(err.message));
    },

    createPost(req, res) {
        Post.create(req.body)
            .then((post) => {
                User.findOneAndUpdate({ username: req.body.username}, { $addToSet: { posts: post._id }})
                .then(() => res.json(post))
            })
            .catch((err) => res.status(500).json(err.message));
    },

    updatePost(req, res) {
        Post.findOneAndUpdate(req.body) 
            .then((post) => !post ?
                res.status(404).json({ message: 'No post with that ID!'})
                : res.json(post)
                )
                .catch((err) => res.status(500).json(err.message));
        
    },

    deletePost(req, res) {
        Post.findOneAndDelete(req.body)
            .then((post) => !post ? 
                res.status(404).json({ message: 'No post with that ID!' })
                    : Post.deleteOne({ _id: { $in: post } })
                    )
                    .then(() => res.json({ message: 'Post deleted!' }))
                    .catch((err) => res.status(500).json(err));
    },

    createComment(req, res) {
        Post.findByIdAndUpdate(req.params.postId, { $addToSet: { comments: req.body } }, { runValidators: true, new: true })
            .then(() => res.json({ message: 'Comment created! '}))
            .catch((err) => res.status(500).json(err));

    },

    deleteComment(req, res) {
        Post.findByIdAndUpdate(req.params.postId, { $pull: { comments: { commentId: req.params.commentId } }}, { runValidators: true, new: true })
            .then(() => res.json({ message: 'Comment Deleted' }))
            .catch((err) => res.status(500).json(err));
    }
}