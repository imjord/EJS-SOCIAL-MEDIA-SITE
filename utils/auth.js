const jwt = require('jsonwebtoken');
require('dotenv').config()

// secret
const secret = process.env.TOKEN_SECRET;
// data to hash in the token

// expire time
const expiration = '2h';

module.exports = {
    signToken: function ({ username, email, _id}) {
        const payload = { username, email, _id }; // this sign token function expects a user object and will add thats users username email and id properties to the token

        return jwt.sign({data: payload}, secret, { expiresIn: expiration})
    },

    authMiddleware: function ({ reg }) {
        // allows token to be sent via req.body req query or headeres
        let token = req.body.token || req.query.token || req.headers.authorization;

        // seperate bearer from token valuie
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        // if no token return request obeject as is
        if(!token) {
            return req;
        }

        try {
            // decode and attach user data to reqst object 
            const { data } = jwt.verify(token,secret, {maxAge: expiration});
            req.user = data
        } catch {
            console.log('invalid token ')
        }

        // return updatec request object
        return req;
    }
}