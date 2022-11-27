// Friends List
// Favorites
// Remove Friend Option
// -- RYAN

import Avatar from "react-avatar"
import { Col, Row, Container } from "react-bootstrap"
import avatarPic from "../assets/images/Sebas-dog.jpeg"

export const Friends = () => {
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
                            <div className="friends-header">
                                <h2>Your Friends</h2>
                            </div>
                            <div className="friends-box">
                                <Container className="friends-list">
                                        <Row className="friend-profile-item">
                                                <Col xs lg="2">
                                                    <Avatar className="avatar" src={avatarPic}></Avatar>
                                                </Col>
                                                <Col className="friend-user" md="auto">
                                                    <strong><h3>Sebastian Tischner</h3></strong>
                                                    <h6>@sebascrab</h6>
                                                </Col>
                                        </Row>
                                        <Row className="friend-profile-item">
                                                <Col xs lg="2">
                                                    <Avatar className="avatar" src={avatarPic}></Avatar>
                                                </Col>
                                                <Col className="friend-user" md="auto">
                                                    <strong><h3>Sebastian Tischner</h3></strong>
                                                    <h6>@sebascrab</h6>
                                                </Col>
                                        </Row>
                                        <Row className="friend-profile-item">
                                                <Col xs lg="2">
                                                    <Avatar className="avatar" src={avatarPic}></Avatar>
                                                </Col>
                                                <Col className="friend-user" md="auto">
                                                    <strong><h3>Sebastian Tischner</h3></strong>
                                                    <h6>@sebascrab</h6>
                                                </Col>
                                        </Row>
                                </Container>
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
