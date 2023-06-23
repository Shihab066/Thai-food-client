import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';



const Register = () => {
    const { createUser, updateUser,googleSignIn,githubSignIn } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        setEmailError(null)
        setError(null)
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!email) {
            setEmailError("Field Required")
            return
        }
        if (!password) {
            setError("Please enter a password")
            return
        }
        if (password.length < 6) {
            setError("password must be at least 6 characters")
            return
        }
        

        createUser(email, password)
            .then(() => {                
                updateUser(name, photo)
                navigate('/')
            })
            .catch(error => {
                const errorM = error.message;
                console.log(errorM)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate('/')
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => {
            navigate('/')
        })
    }

    const handleAccepted = () => {
        setAccepted(!accepted)
    }
    return (
        <Container className='w-25 mx-auto d-flex flex-column justify-content-center' style={{ height: '700px' }}>
            <Form onSubmit={handleRegister}>
                <h3 className='fw-semibold'>Please Register</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className='text-danger'>
                        {emailError && emailError}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type={accepted ? "text" : "password"} name='password' placeholder="Password"  />
                    <Form.Text className='text-danger'>
                        {error && error}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label="Show Password" />
                </Form.Group>
                <Button variant="warning" type="submit" className='fw-semibold'>
                    Register
                </Button>


                <Form.Group className='mt-2'>
                    <Form.Text className=''>
                        Have an Account? <Link to={'/login'} className='text-warning fw-semibold'>Login</Link>
                    </Form.Text>                
                </Form.Group>
                <p className='text-center fw-semibold m-0'>or</p>
                <div >
                    <hr className='mt-1' />
                </div>

                <div>

                    <Button onClick={handleGoogleSignIn} variant="outline-primary" className='w-100 rounded-pill'><FaGoogle /> Continue With Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark" className='w-100 mt-2 rounded-pill'><FaGithub /> Continue With Github</Button>
                </div>
            </Form>
        </Container>
    );
};

export default Register;