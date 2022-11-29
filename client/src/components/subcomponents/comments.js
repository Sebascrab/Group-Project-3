import React from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"



export const Comments = ({comments}) => {

    console.log(comments)

    return (
        <Row className='post-comment-box'>
            <Col>
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Comments
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <strong>{comments.user.firstName}</strong>
                            <p>{comments.commentBody}</p>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col className='comment-display' md="auto">
                <Form>
                    <input className='comment-input' placeholder='comment'></input>
                    <Button className='comment-submit-btn' type='submit' variant='info' >Submit</Button>

                </Form>

            </Col>
          
        </Row>
    )
}
