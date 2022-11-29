const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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

        user: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ,

        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
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