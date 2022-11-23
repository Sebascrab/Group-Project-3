// Friends List
// Favorites
// Remove Friend Option
// -- RYAN


import { Friend } from './friends modal/Friends'
import { Col, Row, Container } from "react-bootstrap"


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
                                    {/* friend import */}
                                        <Friend/>
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
