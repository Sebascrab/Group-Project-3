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
}
type Post {
    _id: ID
    postText: String
    createdAt: String
    user: User
    comments: [Comment]
    commentCount: Float
}
type Comment {
    _id: ID
    postId: String
    commentBody: String
    user: User
    createdAt: String
}
type Query {
    me: User
    userFeed: [Post]
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