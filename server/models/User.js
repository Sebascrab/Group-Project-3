


const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({

    firstName: {
        type: String,
        required: 'Must have a name!',
        trim: true,
        minlength: 1,
        maxlength: 25
    },

    lastName: {
        type: String,
        required: 'Must have a name!',
        trim: true,
        minlength: 1,
        maxlength: 25
    },


    username: {
        type: String,
        require: 'Must have a username!',
        trim: true,
        minlength: 1,
        maxlength: 15,
        unique: true
    },

    email: {
        type: String,
        required: 'Must have an email!',
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },

    password: {
        type: String,
        required: 'Must have a password!',
        match: [/^.{4,8}$/]
        // Matches any string between 4 and 8 characters in length. Limits the length of a string. Useful to add to password regular expressions.
    },

    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 5;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});


const User = model('User', userSchema);

module.exports = User;