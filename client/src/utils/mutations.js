import { gql } from "@apollo/client";

export const loginUser = gql`
mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`
export const signUpUser = gql`
mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const updateUser = gql`
mutation UpdateUser($firstName: String, $lastName: String, $username: String, $email: String, $password: String) {
    updateUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
      }
    }
  }
`

export const addPost = gql`
mutation AddPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      username
      postText
      createdAt
      comments {
        _id
        postId
        commentBody
        username
        createdAt
      }
      commentCount
    }
  }
`
export const deletePost = gql`
mutation DeletePost($postId: ID) {
    deletePost(postId: $postId) {
      _id
    }
  }
` 
export const addFriend = gql`
mutation Mutation($username: String!) {
    addFriend(username: $username) {
      _id
      firstName
      lastName
      username
    }
  }
`
export const deleteFriend = gql`
mutation DeleteFriend($username: String!) {
    deleteFriend(username: $username) {
      _id
    }
  }
`
export const addComment = gql`
mutation AddComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      postId
      commentBody
      username
      createdAt
    }
  }
`
export const deleteComment = gql`
mutation DeleteComment($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      _id
    }
  }
`
