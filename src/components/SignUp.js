import React from 'react';
import Logo from "../assets/images/KeepUpLogo.png"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBRow,
    MDBCol
}
    from 'mdb-react-ui-kit';

function SignUp() {

    
    return (
        <div>
            <MDBContainer fluid className='vh-100' id='signUpBackground'>
                <MDBRow className='d-flex justify-content-center align-items-center h-100 opacity-9'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-light text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                                <img src={Logo} id="logoImageSignUp" />
                                <h3 className="text-uppercase text-center mb-5">Create an account</h3>
                                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='signUpFirstName' type='text' />
                                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='signUpLastName' type='text' />
                                <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='signUpEmail' type='email' />
                                <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='signUpUsername' type='text' />
                                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='signUpPassword' type='password' />
                                <MDBBtn outline className='mx-2 px-5 text-dark-50' color='dark' size='lg'>
                                    Sign Up
                                </MDBBtn>
                                <div>
                                    <p className="mb-0 mt-5">Already have an account? <a href="/signin" className="text-dark-50 fw-bold">Log In</a></p>

                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default SignUp;