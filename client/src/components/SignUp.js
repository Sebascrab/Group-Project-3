import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { signUpUser } from "../utils/mutations";
import Auth from "../utils/auth";
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

function SignUp() {

    const [formState, setFormState] = useState({ firstName: "", lastName: "", username: "", email: "", password: "" });
    const [addUser, { error }] = useMutation(signUpUser);

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormState({ ...formState, [name]: value })
      }

      const handleFormSubmit = async (event) => {
        event.preventDefault()
        try {
          const { data } = await addUser({
            variables: { ...formState }
        });
       
        Auth.login(data.addUser.token)
          document.location.replace("/home")
        } catch (error) {
          console.error(error)
        }
        setFormState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    
        })
      }




    return (
        <div>
            <MDBContainer fluid className='vh-100' id='signUpBackground'>
                <MDBRow className='d-flex justify-content-center align-items-center h-100 opacity-9'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-light text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' onSubmit={handleFormSubmit}>
                                <img src={Logo} id="logoImageSignUp" alt="logo"/>
                                <h3 className="text-uppercase text-center mb-5">Create an account</h3>
                                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='firstName' name="firstName" type='firstName' value={formState.firstName} onChange={handleChange}/>
                                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='lastName' name="lastName" type='lastName' value={formState.lastName} onChange={handleChange}/>
                                <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='username' name="username" type='username' value={formState.username} onChange={handleChange}/>
                                <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='email' name="email" type='email' value={formState.email} onChange={handleChange}/>
                                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='password' name="password" type='password' value={formState.password} onChange={handleChange}/>
                                <MDBBtn outline className='mx-2 px-5 text-dark-50' color='dark' size='lg' type='submit' onClick={handleFormSubmit}>
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