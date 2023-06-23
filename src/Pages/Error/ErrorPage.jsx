import React from 'react';
import { Button, Container } from 'react-bootstrap';
import errorImg from '../../assets/404.jpg'
const ErrorPage = () => {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <img src={errorImg} alt="" style={{maxWidth: "700px"}} />
            <div>
            <Button className='py-2 px-4 fw-semibold' variant='warning' onClick={() => history.back()}>Go Back</Button>
            </div>
        </Container>
    );
};

export default ErrorPage;