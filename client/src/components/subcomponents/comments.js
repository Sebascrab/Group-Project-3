import React from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"



export const Comments = ({ comments }) => {

    return (

        <Dropdown.Item>
            <strong>@{comments.user.username}</strong>
            <p>{comments.commentBody}</p>
        </Dropdown.Item>

    )
}
