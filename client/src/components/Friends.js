// Friends List
// Favorites
// Remove Friend Option
// -- RYAN
import React, { useState } from 'react';
import { Col, Row, Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FriendCard } from "./subcomponents/FriendCard"
import { Navigate, useParams } from "react-router"
import { useQuery, useMutation, gql } from "@apollo/client"
import { Query_Me } from "../utils/queries"
import Auth from "../utils/auth"
import {AddFriendInput, addFriendInput} from './subcomponents/addFriendInput'




export const Friends = () => {

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

            <section className="vh-100">
                <div className="page-banner">
                    <h1 className="page-title"><strong>Friends</strong>
                    </h1>
                </div>
                <Container>
                    <Row className="align-items-center">
                        <Col md={2}>

                        </Col>
                        <Col md={8}>
                            <div>
                                <div className="friends-header mt-2">
                                    <h2>Your Friends</h2>
                                </div>
                                <div className='mt-4'>
                                   <AddFriendInput />
                                </div>
                                <div className="friends-box">
                                    <Row className="mt-4 row-cols-3 sm-row-cols-1">

                                        {user.me.friends.length ? (user.me.friends.map((friend) => (
                                            <FriendCard key={friend._id} friend={friend} />
                                        )))
                                            : (<div> No Friends, sorry.</div>)
                                        }

                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>

                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
