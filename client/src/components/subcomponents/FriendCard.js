
import { Col, Row, Container } from "react-bootstrap"
import Avatar from "react-avatar"
import avatarPic from "../../assets/images/Sebas-dog.jpeg"
import Auth from "../../utils/auth"
import { Query_Me } from "../../utils/queries"


export const FriendCard = ({ friend }) => {

    console.log(friend)


    return (

        <Row className="friend-profile-item">
            <Col className="friend-user" md="auto">
                <strong><h3 className="text-capitalize">{friend.firstName + " " + friend.lastName}</h3></strong>
                <h6>
                    @{friend.username}
                </h6>
            </Col>
        </Row>





    )
}