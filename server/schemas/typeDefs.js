const { gql } = require('apollo-server-express');
const typeDefs = gql`
type Auth {
    token: ID!
    user: User
}
type User {
    _id: ID
    firstName:String
    lastName:String
    username: String
    email: String
    posts: [Post]
    friends: [User]
}
type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
}
type Query {
    me: User
    posts(username: String): [Post]
}
type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addFriend(username: String!): User
}
`;

module.exports = typeDefs;