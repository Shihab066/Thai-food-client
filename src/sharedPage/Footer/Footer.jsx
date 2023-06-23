import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerlogo from '../../assets/footerLogo.png'
import facebookLogo from '../../assets/Facebook.png'
import twitterLogo from '../../assets/Twitter.png'
import linkedinLogo from '../../assets/Linkind.png'
import instagramLogo from '../../assets/Instagram.png'

const Footer = () => {
    return (
        <Container className='mt-4 mb-5'>
            <Row>
                <Col lg={3} className='mt-3 mt-md-0'>
                    <div>
                        <img src={footerlogo} className='img-fluid' alt="" />
                        <p className='mt-3 text-secondary'>
                            <small>
                                Wide selection of authentic and delicious Thai recipes. Our mission is to share the rich culinary heritage of Thailand with food enthusiasts all over the world.
                            </small>
                        </p>
                        <div className='d-flex gap-2'>
                            <a href="https://facebook.com/" target="_blank"><img src={facebookLogo} alt="" /></a>
                            <a href="https://twitter.com/" target="_blank"><img src={twitterLogo} alt="" /></a>
                            <a href="https://www.linkedin.com/" target="_blank"><img src={linkedinLogo} alt="" /></a>
                            <a href="https://www.instagram.com/" target="_blank"><img src={instagramLogo} alt="" /></a>
                        </div>
                    </div>
                </Col>

                <Col lg={3} className='mt-5 mt-md-0'>
                    <h5 className='fw-bold mt-2'>About Us</h5>
                    <p className='mt-md-5 pt-2 text-secondary'>
                        Thailand's rich culinary culture<br /> with food enthusiasts worldwide.<br />Our team of experienced chefs and food lovers work tirelessly to curate a collection of authentic Thai recipes that are easy to follow and fun to make.
                    </p>
                </Col>

                <Col lg={3} className='mt-3 mt-md-0'>
                    <h5 className='fw-bold mt-2 '>Contact Us</h5>
                    <p className='text-secondary mt-md-5 pt-2'>Sukhumvit Road 123/456,<br /> Bangkok, Thailand 15492<br />+66 2 123 4567</p>
                </Col>
                
                <Col lg={3} className='mt-3 mt-md-0'>
                    <h5 className='fw-bold mt-2'>Privacy Policy</h5>
                    <p className='text-secondary mt-md-5 pt-2'>
                    We value your privacy and only collect the necessary information to improve your user experience. Your personal information is safe with us and we never share it with third parties without your consent. Contact us if you have any questions or concerns.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;