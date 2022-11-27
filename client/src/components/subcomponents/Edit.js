
import { Button, Col, Container, Row } from "react-bootstrap"



export const Edit = () => {
    return (
        <Container className="edit-card" xs={12} md={8}>
            <Row >
                <Row className="settings-input">
                    <strong>Name:</strong>
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
                    <Button variant="info">Submit</Button>
                </Col>
            </Col>
        </Container>
    )
}

