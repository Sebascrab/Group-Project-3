// Once Signed in:
// Feed of posts.
// Assorted Advertisements. 
// Emoji Reactions
// -- SEA BASS
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Dropdown, Form, InputGroup } from "react-bootstrap"

import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillChatLeftDotsFill } from "react-icons/bs"

import avatarPic from '../assets/images/Sebas-dog.jpeg'
import dummyPic1 from '../assets/images/Sebas-travel.jpeg'
import dummyPic2 from '../assets/images/land-rover.jpeg'
import Avatar from 'react-avatar';




export const Feed = () => {
    return (
        //    header
        <section className='h-100'>
            <div className='page-banner'>
                <h1 className='page-title'><strong>Home</strong></h1>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={2}>
                    </Col>
                    <Col className='scroll' md={8}>
                        <div>
                            <div className='feed-header'>
                                <h2>Feed</h2>
                            </div>
                            {/* post */}
                            <div className='post-box'>
                                <form>
                                    <div className='post-box-input'>
                                        <Avatar className='avatar' src={avatarPic} />
                                        <input placeholder="What's Happening"></input>
                                    </div>
                                    <Button className='post-button' variant="outline-info">
                                        Post
                                    </Button>
                                </form>
                            </div>
                        </div>
                        {/* Post */}
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
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}