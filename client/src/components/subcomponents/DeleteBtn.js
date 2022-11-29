import React from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"
import { useMutation, gql } from '@apollo/client';
import { DeletePost } from '../../utils/mutations';


export const DeleteButton = ({ postId }) => {

    const [deletePost, { error }] = useMutation(DeletePost, {
        update(cache, {data: {deletePost}}) {
            try {
                cache.evict({_id: `Post_id: ${postId}`})
            } catch (e) {
                console.log(cache)
            }
        }
    })

    
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await deletePost({
                variables: { postId: postId }
            })
           
        } catch (e) {
            console.error(error);
        }
    }

    return (
        <div className='d-flex justify-content-end'>
            <Button
                className='post-delete-btn mb-2'
                type='submit'
                onClick={handleSubmit}>
                Delete
            </Button>
        </div>
    )
}