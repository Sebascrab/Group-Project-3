const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id})
                    .select("-__v -password")
                    .populate("posts")
                    .populate("friends");
                return userData;
            }
            throw new AuthenticationError("Know Your Place Trash.")
        },
        posts: async(parent, {username}) => {
            const params = username ? {username} : {}
            return Post.find(params).sort({createdAt: -1})
        }
    },

    Mutation: {
        login: async(parent, {username, password}) => {
            const user = await User.findOne({username});
            if (!user) {
                throw new AuthenticationError("Username Doesn't Exist")
            }
            const correctPW = await user.isCorrectPassword(password);
            if (!correctPW) {
                throw new AuthenticationError("Incorrect Password")
            }
            const token = signToken(user);

            return {token, user}
        },
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user}
        },
        addPost: async(parent, args, context) => {
            if (context.user) {
                const post = await Post.create({...args, username: context.user.username})
                await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$push: {posts:post._id}},
                    {new: true}
                )
                return post;
            }
            throw new AuthenticationError("You're Not Signed In! Get on that.")
        },
        addFriend: async(parent, {username}, context) => {
            if(context.user) {
                const friend = await User.findOne({username});
                const me = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$push: {friends:friend._id}},
                    {new: true}
                )
                return me;
            }
        }
    }
}

module.exports = resolvers;