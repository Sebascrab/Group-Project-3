import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Query_Me } from '../../utils/queries';
import { AddFriend } from '../../utils/mutations';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const AddFriendInput = (username) => {

    const [inputState, setInputState] = useState({ username: "" })
    const [addFriend, { error }] = useMutation(AddFriend, {
        update(cache, {data: {addFriend}}) {
            try {
                 
                const {me} = cache.readQuery({query: Query_Me});
                cache.writeQuery({
                    data: {me: {...me, friends: [...me.friends, addFriend]}}
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
            await addFriend({
                variables: { ...inputState }
            })
            setInputState({ username: "" })
        } catch (error) {
            console.error(error);
        }
    }

    

    return (

        <InputGroup className="my-2 add-friend-input">
            <Form.Control
                className="rounded"
                placeholder="Username"
                aria-label="Username to add friend"
                aria-describedby="add friend"
                name="username"
                value={inputState.username}
                onChange={handleChange}
            />
            <Button 
            className="add-friend-button" 
            size="sm"
            type="submit"
            onClick={handleSubmit}>
                Add Friend
            </Button>
        </InputGroup>

    )
}
