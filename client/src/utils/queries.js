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
      username
      comments {
        _id
        postId
        commentBody
        username
        createdAt
      }
      commentCount
    }
    friends {
        _id
        firstName
        lastName
        username
        email
        posts {
          _id
          postText
          createdAt
          username
          comments {
            _id
            postId
            username
            createdAt
            commentBody
          }
          commentCount
        }
      }
  }
}

`

