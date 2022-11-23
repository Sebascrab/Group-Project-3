import React from 'react';

import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"
import Avatar from 'react-avatar';
import dummyPic1 from '../../assets/images/Sebas-travel.jpeg'
import avatarPic from '../../assets/images/Sebas-travel.jpeg'
import { BsCheckCircleFill } from "react-icons/bs";
export const Post = () => {
    return(
        <section>
            <Container className='timeline'>
                            <Row className='post-user-box'>
                                <Col xs lg="2">
                                    <Avatar className='avatar' src={avatarPic} />
                                </Col>
                                <Col className='post-user' md="auto">
                                    <strong><h3>Sebastian Tischner <BsCheckCircleFill /></h3></strong>
                                    <h6>@sebascrab</h6>
                                </Col>
                                
                            </Row>
                            <Row className='post-output'>
                                <Col className='post-output-text'>
                                    <h4>Going to be travelling here pretty soon! Can't wait to go back to Taiwan. </h4>
                                </Col>
                                <Col md="auto">
                                </Col>
                                <Col xs lg="2">
                                <p>11/21/22</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img className='post-output-photo' src={dummyPic1}></img>
                                </Col>
                                <Col md="auto">
                                </Col>
                                <Col xs lg="2">
                                </Col>
                            </Row>
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
                                    <Button class='comment-submit-btn' type='submit' variant='info' >Submit</Button>
                                    </Form>
                                    
                                </Col>
                                <Col xs lg="2">
                                </Col>
                            </Row>
                        </Container>
        </section>
    )
}