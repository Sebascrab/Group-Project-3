// Profile Avatar Photo - Circle
// Update / Edit Information
// Login Info Change
// Delete Account
// -- SEABASS
import React, { useState } from 'react';
import { Button, Col, Container, Row, Card } from "react-bootstrap"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Query_Me } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { UpdateUser } from "../utils/mutations";
import Auth from '../utils/auth';


export const Settings = () => {
    const { loading, error, data } = useQuery(Query_Me);

    const user = data || {};

    if (loading) {
        return <div>Loading...</div>
    }

    if (user.me) {
        return (


            <section className='vh-100'>
                <div className='page-banner'>
                    <h1 className='page-title'><strong>Settings</strong></h1>
                </div>
                <Container>
                    <Row>

                        <Col className="edit">
                            <div className="edit-header">
                                <h3><strong>Update Profile</strong></h3>
                            </div>
                            <Row className="px-4">
                                <Container className="edit-card" xs={12} md={8}>
                                    <Row >
                                        <Row className="settings-input">
                                            <strong>First Name:</strong>
                                            <input
                                                placeholder={user.me.firstName}
                                                type="text"
                                                name="firstName"
                                            ></input>
                                        </Row>
                                        <Row className="settings-input">
                                            <strong>Last Name:</strong>
                                            <input
                                                placeholder={user.me.lastName}
                                                type="text"
                                                name="lastName"
                                            ></input>
                                        </Row>
                                        <Row className="settings-input">
                                            <strong>Username:</strong>
                                            <input
                                                placeholder={user.me.username}
                                                type="text"
                                                name="username"
                                            ></input>
                                        </Row>
                                        <Row className="settings-input">
                                            <strong>Email:</strong>
                                            <input
                                                placeholder={user.me.email}
                                                type="text"
                                                name="email"
                                            ></input>
                                        </Row>
                                        <Row className="settings-input">
                                            <strong>Password:</strong>
                                            <input
                                                placeholder="**********"
                                                type="password"
                                                name="password"
                                            ></input>
                                        </Row>
                                    </Row>

                                    <Col>
                                        <Col className="mt-3 mb-4 d-flex justify-content-center">
                                            <Button variant="info">Update</Button>
                                        </Col>
                                    </Col>
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}