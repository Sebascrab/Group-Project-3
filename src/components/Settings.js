// Profile Avatar Photo - Circle
// Update / Edit Information
// Login Info Change
// Delete Account
// -- SEABASS
import { Col, Container, Row } from "react-bootstrap"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Profile } from './profile modal/Profile'
import { Edit } from './edit modal/Edit'


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
                        {/* Profile Import */}
                        <Profile/>
                    </Col>
                    
                    <Col className="edit">
                        <div className="edit-header">
                            <h3><strong>Edit Profile</strong></h3>
                        </div>
                        <Row>
                           <Edit/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}