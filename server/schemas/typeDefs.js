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
    friendCount: Float
    userFeed: [Post]
}
type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    comments: [Comment]
    commentCount: Float
}
type Comment {
    _id: ID
    postId: String
    commentBody: String
    username: String
    createdAt: String
}
type Query {
    me: User
    posts(username: String): [Post]
    userFeed: User
}
type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, username: String, email: String, password: String): Auth
    addPost(postText: String!): Post
    deletePost(postId: ID): Post
    addFriend(username: String!): User
    deleteFriend(username: String!): User
    addComment(postId: ID!, commentBody: String!): Comment
    deleteComment(commentId: ID!): Comment

}
`;

module.exports = typeDefs;