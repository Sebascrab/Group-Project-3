const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({

    firstName: {
        type: String,
        required: 'Must have a first name!',
        trim: true,
        minlength: 1,
        maxlength: 25
    },

    lastName: {
        type: String,
        required: 'Must have a last name!',
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
        match: [/.+@.+\..+/, "Must match an email address!"],
    },

    password: {
        type: String,
        required: 'Must have a password!',
        match: [/^.{6,20}$/]
        // Matches any string between 6 and 20 characters in length. Limits the length of a string. Useful to add to password regular expressions.
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

userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});


userSchema.pre("save", async function (next){
    const lowercaseUsername = this.username
    this.username = lowercaseUsername.toLowerCase()
    
    const lowerEmail = this.email
    this.email = lowerEmail.toLowerCase()

    if (this.isNew || this.isModified("password")) {
        const rounds = 10;
        this.password = await bcrypt.hash(this.password, rounds);
    }
    next();
})

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User;