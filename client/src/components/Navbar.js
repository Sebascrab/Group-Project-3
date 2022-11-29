// Navbar Requirements: Side Navbar 
// Home Button
// Sign In / Sign Out
// Post Option
// Friends
// Profile Photo
// -- TOMMY

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import userPhoto from "../assets/images/land-rover.jpeg"
import Logo from "../assets/images/KeepUpLogo.png"
import Auth from "../utils/auth";




export const Nbar = () => {
  const logout = (event) => {
    event.preventDefault()
    Auth.logout()
  }
  return (
    <Navbar expand="lg" className="" id='navbarbackground'>
      <Container>
        <Navbar.Brand>
          <img src={Logo} className="" id="logoImage" alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fa-solid fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-ngit push --set-upstream origin friendspopulatedav">
          <Nav className="ms-auto">
            {Auth.loggedIn() ? (
              <>
                <Button>
                  <Link to="/home" className='btn w-30'>Home</Link>
                </Button>
                <Button>
                  <Link to="/friends" className='btn w-30'>Friends</Link>
                </Button>
                <Button>
                  <Link to="/settings" className='btn'>Settings</Link>
                </Button>
                <Button>
                  <a href="/signin" onClick={logout} className='btn'> Log Out</a>
                </Button>
              </>

            ) : (
              <>

                <Button>
                  <Link to="/signin" className='btn'>Login</Link>
                </Button>
                <Button>
                  <Link to="/signup" className='btn'>Sign Up</Link>
                </Button>

              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

