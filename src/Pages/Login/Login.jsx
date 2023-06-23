import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [showPassword, setShowpassword] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        setError(null)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(() => {
                setError("Email or password didn't match, try again.")
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => {
            navigate(from, {replace:true})
        })
    }
    const handlePassword = () => {
        setShowpassword(!showPassword)
    }
    return (
        <Container style={{ height: '700px' }} className='d-flex align-items-center w-25 mx-auto'>
            <Form onSubmit={handleLogin}>
                <h2 className='fw-semibold'>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showPassword ? "text" : "password"} name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show Password" onClick={handlePassword} />
                </Form.Group>

                <Button
                    variant="warning"
                    className='fw-semibold'
                    type="submit">
                    Login
                </Button>
                <Form.Group className='mt-2'>
                    <Form.Text>
                        New to Food? <Link to={'/register'} className='text-warning fw-semibold'>Register</Link>
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mt-2'>
                    <Form.Text className='text-danger'>
                        {error && error}
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
        </Container >
    );
};

export default Login;