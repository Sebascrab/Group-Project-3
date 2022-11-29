const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const { findByIdAndUpdate } = require('../models/User');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select("-__v -password")
                    .populate({ path: "posts", options: { sort: { createdAt: -1 } }, populate: "comments" })
                    .populate("friends");
                return userData;
            }
            throw new AuthenticationError("Know Your Place Trash.")
        },

        // Leaving commented out, a query for a future admin.
        // posts: async (parent, args, context) => {
        //     return Post.find()
        //         .populate("user")
        //         .populate("comments")
        //         .sort({ createdAt: -1 })
        // },
        userFeed: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .populate("friends");
                // get all the friends username of the user
                const friends = userData.friends.map(friend => friend._id);
                friends.push(userData._id);
                // get posts from friends plus the user
                const feed = await Post.find({ user: { $in: friends } })
                    .populate("user")
                    .populate({ path: "comments", options: { sort: { createdAt: -1 } }, populate: "user" })
                    .sort({ createdAt: -1 });

                return feed

            }

            throw new AuthenticationError("Not Signed In")
        }
    },

    Mutation: {
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) {
                throw new AuthenticationError("Username Doesn't Exist")
            }
            const correctPW = await user.isCorrectPassword(password);
            if (!correctPW) {
                throw new AuthenticationError("Incorrect Password")
            }
            const token = signToken(user);

            return { token, user }
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user }
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    context.user._id, args, { new: true }
                )
                const token = signToken(user);

                return { token, user }

            }
            throw new AuthenticationError("You're Not Signed In! Get on that.")
        },
        addPost: async (parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, user: context.user._id })
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                )
                return post;
            }
            throw new AuthenticationError("You're Not Signed In! Get on that.")
        },
        deletePost: async (parent, { postId }, context) => {
            if (context.user) {
                const post = await Post.findById(
                    { _id: postId }
                )
                if (post.username == context.user.username) {
                    const comments = post.comments
                    comments.forEach(async comment => {
                        await Comment.findByIdAndDelete(
                            { _id: comment._id }
                        )
                    })
                    await post.delete()
                    await User.findByIdAndUpdate(
                        { _id: context.user._id },
                        { $pull: { posts: post._id } },
                        { new: true }
                    )
                    return post;
                }
                throw new AuthenticationError("You are not authorized to delete this post.")
            }
            throw new AuthenticationError("You're Not Signed In! Get on that.")
        },
        addFriend: async (parent, { username }, context) => {
            if (context.user) {
                const friend = await User.findOne({ username });
                const me = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { friends: friend._id } },
                    { new: true }
                )
                return me;
            }
        },
        deleteFriend: async (parent, { username }, context) => {
            if (context.user) {
                const friend = await User.findOne({ username });
                const me = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { friends: friend._id } },
                    { new: true }
                )
                return me;
            }
        },
        addComment: async (parent, args, context) => {
            if (context.user) {
                const comment = await Comment.create({ postId: args.postId, commentBody: args.commentBody, user: context.user._id });
                const post = await Post.findByIdAndUpdate(
                    { _id: args.postId },
                    { $push: { comments: comment._id } },
                    { new: true }
                )
                return post;
            }
            throw new AuthenticationError("You're Not Signed In! Get on that.")
        },
        deleteComment: async (parent, args, context) => {
            if (context.user) {
                const comment = await Comment.findById(
                    { _id: args.commentId }
                )
                if (comment.user._id == context.user._id) {
                    const post = await Post.findByIdAndUpdate(
                        { _id: comment.postId },
                        { $pull: { comments: comment._id } },
                        { new: true }
                    )
                    await comment.delete()
                    return post;
                }
                throw new AuthenticationError("You are not authorized to delete this comment.")
            }
            throw new AuthenticationError("You're Not Signed In! Get on that.")
        }
    }
}

module.exports = resolvers;