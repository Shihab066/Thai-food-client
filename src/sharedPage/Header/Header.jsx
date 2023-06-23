import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/logo.png'
import { AuthContext } from '../../Provider/AuthProvider';
import ActiveLink from '../../../utilities/ActiveLink/ActiveLink';
const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg='white' variant='white' className='sticky-top' >
            <Container>
                <Navbar.Brand><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto  ">
                        <ActiveLink to={'/home'}>Home</ActiveLink>
                        <ActiveLink to={'/blog'} >Blog</ActiveLink>
                        <ActiveLink to={'/contact'} >Contact Us</ActiveLink>
                        <ActiveLink to={'/about'} >About Us</ActiveLink>
                    </Nav>

                    <Nav>
                        {user &&
                            <div className='my-auto me-2 d-flex align-items-center'>
                                {user.photoURL && <img style={{ height: '35px', width: '35px', borderRadius: '50%' }} data-toggle="tooltip" title={user?.displayName} src={user.photoURL} />}
                            </div>
                        }

                        {
                            loading ? <div style={{width:'100px'}} className='text-center'><Spinner animation="grow" variant="warning"  className=''/></div> :
                                <div>
                                    {user ? <Button onClick={logOut} variant="warning" className='fw-semibold'>Log out</Button> :
                                        <div className='d-flex flex-column flex-md-row'>
                                            <Link to={'/login'}><Button variant="warning" className='me-2 fw-semibold mb-1'>Login</Button></Link>
                                            <Link to={'/register'}><Button variant="secondary" className=''>Sign up</Button></Link>
                                        </div>
                                    }
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;