import React from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"
import Avatar from 'react-avatar';
import { Comments } from './comments';
import { DeleteButton } from './DeleteBtn';



const Post = ({ post, user }) => {

    return (
        <section>
            <Container className='timeline' id="post._id">
                <Row className='post-user-box'>
                    <Col xs lg="2">
                        {/* <Avatar className='avatar' src={props.avatarpic} /> */}
                    </Col>
                    <Col className='post-user' md="auto">
                        <strong><h3>{user.firstName + " " + user.lastName}</h3></strong>
                        <h6>{user.username}</h6>
                    </Col>

                </Row>
                <Row className='post-output'>
                    <Col className='post-output-text'>
                        <h4>{post.postText} </h4>
                    </Col>
                    <Col md="auto">
                    </Col>
                    <Col xs lg="2">
                        <p>{post.createdAt}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <img className='post-output-photo' src={props.image}></img> */}
                    </Col>
                    <Col md="auto">
                    </Col>
                    <Col xs lg="2">
                    </Col>
                </Row>



                <Comments/>
                <DeleteButton/>
             
            </Container>
        </section>
    )
}

export default Post;