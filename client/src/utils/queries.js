import { gql } from "@apollo/client";

export const Query_Me = gql`
{
  me {
    _id
    firstName
    lastName
    username
    email
    posts {
      _id
      postText
      createdAt
      user {
        _id
        firstName
        lastName
        username
      }
    }
    friends {
      _id
      lastName
      firstName
      username
    }
    friendCount
  }
}

`
export const Query_UserFeed = gql`
{
  userFeed {
    _id
    postText
    createdAt
    user {
      _id
      username
      firstName
      lastName
    }
    comments {
      _id
      commentBody
      user {
        _id
        username
        firstName
        lastName
      }
      createdAt
    }
  }
}
`


