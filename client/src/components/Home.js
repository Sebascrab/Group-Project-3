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
import { FeedPostInput } from './subcomponents/FeedPostInput';
import { Feed } from './subcomponents/Feed';






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
    if (user.me) {
        return (
            <section className='min-vh-100' id='homeBg' >
                <div className='page-banner'>
                    <h1 className='page-title mb-3 mt-2'><strong className='text-capitalize'>Hello {user.me.firstName} </strong></h1>
                </div>
                <Container>




                    <Row className=''>
                        <Col md={2}>
                        </Col>
                        <Col className='scroll' md={8}>
                            <div>
                                <FeedPostInput/>
                            </div>


                            <div className='feed-header mt-3'>
                                <h2>Feed</h2>
                            </div>
                            {/* Post */}

                            <Feed/>

                        </Col>
                        <Col md={2}>
                        </Col>
                    </Row>
                </Container>
            </section >
        )
    }
}