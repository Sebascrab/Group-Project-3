// Feed Components

// Once Signed in:
// Feed of posts.
// Assorted Advertisements. 
// Emoji Reactions
// --SEA BASS
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Dropdown, Form, InputGroup } from "react-bootstrap"
import avatarPic from '../assets/images/Sebas-dog.jpeg'
import Avatar from 'react-avatar';
import Post from "./subcomponents/Post"
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Query_Me } from '../utils/queries';
import Auth from '../utils/auth';







export const Home = () => {

    const { username: userParam } = useParams();
    const { loading, error, data } = useQuery(Query_Me);


    const user = data || {};

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/home" />
    }
    if (loading) {
        return <div>Loading...</div>
    }
    if (user.me.username) {
        return (
            <section className='h-100' >
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
                            {user.me.posts.length ? (user.me.posts.map((post) => (
                                <Post key={post._id} post={post}  user={user.me} />

                            )))
                                : (<div>No Posts Available</div>)
                        }

                        </Col>
                        <Col md={2}>
                        </Col>
                    </Row>
                </Container>
            </section >
        )
    }
}