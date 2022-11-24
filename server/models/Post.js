



const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');



const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        commentBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 140,
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => date.Format(date)
        }
    },
    {

        toJSON: {
            virtuals: true,
        },
        id: false,
    }


);

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            maxlength: 140,
            minlength: 1
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => dateFormat(date)
        },

        user: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        comments: [commentSchema]
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);

postSchema 
.virtual('commentCount')
.get(function () {
    return this.comments.length;

});

const Post = model('Post', postSchema);

module.exports = Post;