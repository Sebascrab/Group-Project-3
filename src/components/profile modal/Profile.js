
import React from 'react';
import { Button, Card } from "react-bootstrap"
import { BsCheckCircleFill } from "react-icons/bs";
import avatarPic from '../../assets/images/Sebas-dog.jpeg'





export const Profile = () => {
    return (

        <section>
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
        </section>
    )
}