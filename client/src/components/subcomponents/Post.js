import React from 'react';
import { Button, Col, Container, Row, Dropdown, Form } from "react-bootstrap"
import Avatar from 'react-avatar';
import { Comments } from './comments';
import { DeleteButton } from './DeleteBtn';
import { AddComments } from './addComment'
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';



const Post = ({ post }) => {

    const username = Auth.getProfile().data.username
    


    return (
        <section>
            <Container className='timeline' id="post._id">
                <Row className='post-user-box'>
                    <Col className='post-user' md="auto">
                        <div className='text-capitalize'>{post.user.firstName + " " + post.user.lastName}</div>
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

                <Row className='post-comment-box'>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                Comments
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {post.comments.length ? (post.comments.map((comment) => (

                                    <Comments key={comment._id} comments={comment} />

                                )))
                                    : (<Dropdown.Item>
                                       <p>No Comments</p>
                                    </Dropdown.Item>)
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>

                    <AddComments key={post._id} postId={post._id}/>

                </Row>


               {username == post.user.username ? (<DeleteButton postId={post._id}/>) : (<></>)}
                {/* <DeleteButton/> */}

            </Container>
        </section>
    )
}

export default Post;