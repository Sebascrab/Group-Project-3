import React from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"



export const Comments = () => {
    return (
        <Row className='post-comment-box'>
            <Col>
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Comments
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <strong>Tommy</strong>
                            <p>Nice, have fun!</p>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <strong>Abel</strong>
                            <p>Smh, looks boring tbh!</p>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <strong>Ryan</strong>
                            <p>Where the ladies at..?</p>
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
