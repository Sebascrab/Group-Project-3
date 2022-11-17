// Once Signed in:
// Feed of posts.
// Assorted Advertisements. 
// Emoji Reactions
// -- SEA BASS
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "react-bootstrap"

import { BsCheckCircleFill } from "react-icons/bs";

import anime1 from '../assets/images/demon-slayer.png'
import avatarPic from '../assets/images/Sebas-dog.jpeg'
import dummyPic1 from '../assets/images/Sebas-travel.jpeg'
import dummyPic2 from '../assets/images/land-rover.jpeg'
import Avatar from 'react-avatar';





export const Feed = () => {
    return (
        //    header
        <section>
            <div className='page-banner'>
                <h2 className='page-title'>Home</h2>
                
            </div>
            <Container>

                <Row className='align-items-center'>
                    <Col md={3}>
                    </Col>
                    

                    <Col className='scroll' md={6}>
                        <div>
                            <div className='feed-header'>
                                <h2>Feed</h2>
                            </div>
                            {/* post */}
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

                        {/* Post */}
                        <div className='post'>
                            <div className='post-avatar'>
                                <Avatar className='avatar-feed' src={avatarPic} />
                            </div>
                            <div className='post-body'>
                                <div className='post-header'>
                                    <div className='post-header-text'>
                                        <h3>Sebastian<span>
                                            <BsCheckCircleFill />
                                        </span>
                                        </h3>
                                        <h6>@sebascrab</h6>
                                    </div>
                                    <div className='post-header-description'>
                                        Wishing I was in Taiwan!
                                    </div>
                                    <img className='post-image' src={dummyPic1} alt='Taiwan Pic dummy'></img>
                                    <div className='post-footer'>5:26 pm 07/07/22</div>
                                </div>
                            </div>
                        </div>
                        <div className='post'>
                            <div className='post-avatar'>
                                <Avatar className='avatar-feed' src={avatarPic} />
                            </div>
                            <div className='post-body'>
                                <div className='post-header'>
                                    <div className='post-header-text'>
                                        <h3>Sebastian<span>
                                            <BsCheckCircleFill />
                                        </span>
                                        </h3>
                                        <h6>@sebascrab</h6>
                                    </div>
                                    <div className='post-header-description'>
                                        What I looked liked when creeping on customers...
                                    </div>
                                    <img className='post-image' src={dummyPic2} alt='Taiwan Pic dummy'></img>
                                    <div className='post-footer'>1:02 am 07/07/21</div>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col md={3} >
                        {/* advertising */}
                    </Col>
                </Row>

            </Container>
        </section>
    )
}