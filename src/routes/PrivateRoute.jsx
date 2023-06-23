import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Container, Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
        const { user,loading } = useContext(AuthContext);
        const location = useLocation();
    
        if (loading) {
            return <Container style={{height:'500px'}} className='d-flex align-items-center justify-content-center'>
                <Spinner animation="border" variant="warning" />
            </Container>            
        }
    
        if (user) {
            return children;
        }
        return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;