// Support / Contact Option
// Copyright Stuff
// -- TOMMY

import { Col, Container, Row } from "react-bootstrap"








export const Footer = () => {
    // html for footer
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    
                    <Col className="text-center text-sm-end">
                        <div className="social-icon">
                           
                        </div>
                        <p>
                            <strong>Keep Up &nbsp;</strong>By 
                            <a href="https://github.com/TommyAlv" target="_blank"> Tommy, </a>
                            <a href="https://github.com/Sebascrab" target="_blank">Sebastian, </a>
                            <a href="https://github.com/ryancharleson" target="_blank">Ryan, </a>
                            <a href="https://github.com/AbelitoG" target="_blank">and Abel.</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}