// Profile Avatar Photo - Circle
// Update / Edit Information
// Login Info Change
// Delete Account
// -- SEABASS
import { Button, Col, Container, Row, Card } from "react-bootstrap"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckCircleFill } from "react-icons/bs";
import avatarPic from '../assets/images/Sebas-dog.jpeg'
import Avatar from 'react-avatar';


export const Settings = () => {
    return (


        <section className='vh-100'>
            <div className='page-banner'>
                <h1 className='page-title'><strong>Settings</strong></h1>
            </div>
            <Container>
                <Row>
                    <Col className="profile">
                        <div className="profile-header">
                            <h3><strong>Profile</strong></h3>
                        </div>
                        <Card className='profile-card' style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={avatarPic} />
                            <Card.Body className='profile-body'>
                                <Card.Title> <strong><h3>Sebastian Tischner <BsCheckCircleFill /></h3></strong></Card.Title>
                                <Card.Text>
                                    <h6>@sebascrab</h6>
                                </Card.Text>
                                <Button className="edit-profile-avatar" variant="info">Change Avatar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    
                    <Col className="edit">
                        <div className="edit-header">
                            <h3><strong>Edit Profile</strong></h3>
                        </div>
                        <Row>
                            <Container className="edit-card" xs={12} md={8}>
                                <Row >
                                <Row className="settings-input">
                                    <strong>First Name:</strong>
                                    <input></input>
                                </Row>
                                <Row className="settings-input">
                                    <strong>Last Name:</strong>
                                    <input></input>
                                </Row>
                                <Row className="settings-input">
                                    <strong>Username:</strong>
                                    <input></input>
                                </Row>
                                <Row className="settings-input">
                                    <strong>Email:</strong>
                                    <input></input>
                                </Row>
                                <Row className="settings-input">
                                    <strong>Password:</strong>
                                    <input></input>
                                </Row>
                                </Row>
                            
                            <Col xs={6} md={4}>
                            <Col className="settings-btn" xs={6} md={4}>
                                <Button  variant="info">Submit</Button>
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