import React from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"
import Avatar from 'react-avatar';
import { Comments } from './comments';
import { DeleteButton } from './DeleteBtn';



const Post = ({ post }) => {

    console.log(post)

    return (
        <section>
            <Container className='timeline' id="post._id">
                <Row className='post-user-box'>
                    <Col className='post-user' md="auto">
                        <strong><h3 className='text-capitalize'>{post.user.firstName + " " + post.user.lastName}</h3></strong>
                        <h6 className='font-italic'>@{post.user.username}</h6>
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


                {post.comments.length ? (post.comments.map((comment) => (
                    <Comments key={comment._id} comments={comment}/>
                )))
                    : (<div></div>)
            }
                
                <DeleteButton/>
             
            </Container>
        </section>
    )
}

export default Post;