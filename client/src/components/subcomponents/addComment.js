import React, { useState } from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"
import { useMutation } from '@apollo/client';
import { AddComment } from '../../utils/mutations';
import { Query_UserFeed } from '../../utils/queries';

export const AddComments = (postId) => {

    const [inputState, setInputState] = useState({ postId: postId.postId, commentBody: "" });
    const [addComment, { error }] = useMutation(AddComment, {
        update(cache, { data: { addComment } }) {
            try {
                const { userFeed } = cache.readQuery({ query: Query_UserFeed })
                const updatedUserFeed = userFeed.map((post) => {
                    if (post._id === postId.postId) {
                        return { ...post, comments: [...post.comments, addComment] }
                    }
                    return post
                }
                )
                cache.writeQuery({
                    query: Query_UserFeed,
                    data: { userFeed: updatedUserFeed }
                })
                
                console.log({userFeed});``

            } catch (error) {
                console.warn("No Cache Found")
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
            setInputState({ commentBody: "", postId: "" })
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


