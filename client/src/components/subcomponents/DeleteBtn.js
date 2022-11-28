import React from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"


export const DeleteButton = () => {

    return (
        <div className='d-flex justify-content-end'>
            <Button className='post-delete-btn mb-2' type='submit'>Delete</Button>
        </div>
    )
}