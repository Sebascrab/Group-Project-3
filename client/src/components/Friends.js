// Friends List
// Favorites
// Remove Friend Option
// -- RYAN

import Avatar from "react-avatar"
import { Col, Row, Container } from "react-bootstrap"
import avatarPic from "../assets/images/Sebas-dog.jpeg"
import { FriendCard } from "./subcomponents/FriendCard"
import { Navigate, useParams } from "react-router"
import { useQuery } from "@apollo/client"
import { Query_Me } from "../utils/queries"
import Auth from "../utils/auth"




export const Friends = () => {

    const { username: userParam } = useParams();

    const { loading, error, data } = useQuery(Query_Me);



    const user = data|| {};
    const mee = user.me || {};


    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/home" />
    }
    if (loading) {
        return <div>Loading...</div>
    }
    if (user.me) {

        console.log(user)

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

                                        {mee.friends.length ? (user.me.friends.map((friend) => (
                                             <FriendCard key={mee._id} friend={friend}/>
                                        )))
                                            : (<div> No Friends, sorry.</div>)
                                    }

                                  
                                  
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
}
