// Sign Up Requirements
// Username
// Email
// Password

// Login Requirements:
// Username
// Password

// -- ABEL

import React from 'react'
import Logo from "../assets/images/KeepUpLogo.png"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol
}
  from 'mdb-react-ui-kit';


function SignIn() {
  return (
    <div>

      <MDBContainer fluid className='vh-100' id='signInBackground'>

        <MDBRow className='d-flex justify-content-center align-items-center h-100 opacity-9'>
          <MDBCol col='12'>

            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                <img src={ Logo } id="logoImageLogin" alt="logo"/>
                <h3 className="fw-bold mb-2 text-uppercase">Log In</h3>
                <p className="text-white-50 mb-5 mx-auto text-center">Please enter your Username and Password</p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='logInUsername' type='email' size="lg" className='text-white' />
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='logInPassword' type='password' size="lg" className='text-white' />

                <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                <MDBBtn outline className='mx-2 px-5 text-white-50' color='white' size='lg'>
                  Login
                </MDBBtn>
                <div>
                  <p className="mb-0 mt-5">Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a></p>

                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
  );

}
export default SignIn;
