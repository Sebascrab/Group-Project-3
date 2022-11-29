import React, { useState } from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"
import { useMutation, gql } from '@apollo/client';
import { AddComment } from '../../utils/mutations';
import { Query_UserFeed } from '../../utils/queries';

export const AddComments = (postId) => {

    const [inputState, setInputState] = useState({ postId: postId.postId, commentBody: "" });
    const [addComment, { error }] = useMutation(AddComment, {
        update(cache, { data: { addComment } }) {
            try {
                cache.modify({
                    fields: {
                        userFeed(existingUserFeed = []) {
                            const newCommentRef = cache.writeFragment({
                                data: addComment,
                                fragment: gql`
                                fragment NewComment on Comment {
                                    _id
                                    commentBody
                                    createdAt
                                    user {
                                        _id
                                        firstName
                                        lastName
                                        username
                                    }
                                }`
                            })
                            return [...existingUserFeed, newCommentRef]
                        }
                    }
                })

            } catch (e) {
                console.warn("No Cache Found", error)
            }
        }
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setInputState({ ...inputState, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await addComment({
                variables: { ...inputState }
            })
            setInputState({ commentBody: "", postId: postId.postId })
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <Col className='comment-display' md="auto" >
            <Form>
                <input
                    className='comment-input'
                    placeholder='Comment'
                    type='text'
                    name='commentBody'
                    id='commentBody'
                    value={inputState.commentBody}
                    onChange={handleChange}
                ></input>
                <Button
                    className='comment-submit-btn'
                    type='submit'
                    variant='info'
                    onClick={handleSubmit}
                >Submit</Button>
            </Form>
        </Col>
    )
}


