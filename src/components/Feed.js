// Once Signed in:
// Feed of posts.
// Assorted Advertisements. 
// Emoji Reactions
// -- SEA BASS
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "react-bootstrap"
import { Post } from './post modal/Post'


import avatarPic from '../assets/images/Sebas-dog.jpeg'
import Avatar from 'react-avatar';




export const Feed = () => {
    return (
        //    header
        <section className=''>
            <div className='page-banner'>
                <h1 className='page-title'><strong>Home</strong></h1>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={2}>
                    </Col>
                    <Col className='scroll' md={8}>
                        <div>
                            <div className='feed-header'>
                                <h2>Feed</h2>
                            </div>
                            {/* post box */}
                            <div className='post-box'>
                                <form>
                                    <div className='post-box-input'>
                                        <Avatar className='avatar' src={avatarPic} />
                                        <input placeholder="What's Happening"></input>
                                    </div>
                                    <Button className='post-button' variant="outline-info">
                                        Post
                                    </Button>
                                </form>
                            </div>
                        </div>
                        {/* post output */}
                        <Post/>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}