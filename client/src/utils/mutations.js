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

export const UpdateUser = gql`
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

export const AddPost = gql`
mutation AddPost($postText: String!) {
  addPost(postText: $postText) {
    _id
    createdAt
    postText
    user {
      _id
      firstName
      lastName
      username
    }
  }
}
`
export const DeletePost = gql`
mutation DeletePost($postId: ID) {
    deletePost(postId: $postId) {
      _id
    }
  }
` 
export const AddFriend = gql`
mutation AddFriend($username: String!) {
    addFriend(username: $username) {
      _id
      firstName
      lastName
      username
    }
  }
`
export const DeleteFriend = gql`
mutation DeleteFriend($username: String!) {
    deleteFriend(username: $username) {
      _id
    }
  }
`
export const AddComment = gql`
mutation AddComment($postId: ID!, $commentBody: String!) {
  addComment(postId: $postId, commentBody: $commentBody) {
    _id
    postId
    commentBody
    user {
      _id
      firstName
      lastName
      username
    }
    createdAt
  }
}
`
export const DeleteComment = gql`
mutation DeleteComment($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      _id
    }
  }
`
