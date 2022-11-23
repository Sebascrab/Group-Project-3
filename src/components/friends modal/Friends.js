
import { Col, Row, Container } from "react-bootstrap"
import Avatar from "react-avatar"
import avatarPic from "../../assets/images/Sebas-dog.jpeg"

export const Friend = () => {
    return (
        <Row className="friend-profile-item">
            <Col xs lg="2">
                <Avatar className="avatar" src={avatarPic}></Avatar>
            </Col>
            <Col className="friend-user" md="auto">
                <strong><h3>Sebastian Tischner</h3></strong>
                <h6>@sebascrab</h6>
            </Col>
        </Row>
    )
}