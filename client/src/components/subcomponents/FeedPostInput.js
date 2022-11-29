import React, { useState } from 'react';
import { Button, Col, Container, Row, Dropdown, Form, InputGroup } from "react-bootstrap"
import avatarPic from '../../assets/images/Sebas-dog.jpeg'
import Avatar from 'react-avatar';
import { enableExperimentalFragmentVariables, useMutation } from '@apollo/client';
import { AddPost } from '../../utils/mutations';
import { Query_Me, Query_UserFeed } from '../../utils/queries';



export const FeedPostInput = () => {

    const [inputState, setInputState] = useState({ postText: "" });
    const [addPost, { error }] = useMutation(AddPost, {
        update(cache, { data: { addPost } }) {
            try {

                const { userFeed } = cache.readQuery({ query: Query_UserFeed })
                
                cache.writeQuery({
                    query: Query_UserFeed,
                    data: { userFeed: { ...userFeed, addPost } }
                })

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
            await addPost({
                variables: { ...inputState }
            })
            setInputState({ postText: "" })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className='card'>
                <div className='mx-3 mt-1 mb-1'>
                    <form>
                        <div className='post-box-input d-flex justify-content-center'>

                            <input className="" placeholder="What's Happening..." type='text' name='postText' id='postText' value={inputState.postText} onChange={handleChange}></input>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <Button className='mb-2' variant="outline-info" type='submit' onClick={handleSubmit}>
                                Post
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
