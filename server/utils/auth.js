


const jwt = require('jsonwebtoken');

const secret = 'secret secrets are no fun'
const expiration = '2hr';

module.exports = { 


    authMiddleWare: function (req, res) {

    },

    signToken: function ({ email, username, firstName, lastName, _id }) {
        const payload = { email, username, firstName, lastName, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};