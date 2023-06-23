import React from 'react';
import { Button, Container } from 'react-bootstrap';
import burger from '../../../assets/burger.png'
const ExtraSection2 = () => {
    return (
        <Container id='news-letter-section' style={{marginBottom:"200px"}}>
            <div id='news-letter-section-1' className='d-flex align-items-center justify-content-around bg-dark rounded-3' style={{ height: "350px" }}>
                <div className='d-none d-md-block'>
                    <img src={burger} alt="" className='img-fluid' />
                </div>
                <div id='news-letter-section-2' className='text-white'>
                    <h3>Subcribe To Our Newsletter</h3>
                    <p><small>Stay up-to-date with our latest news, exclusive offers, and <br />exciting promotions by subscribing to our newsletter today!</small></p>
                    <input type="text" placeholder='Type your email...' className='ps-4 py-3 rounded-2 me-2' style={{ border: "none", width: "300px", outline: 'none' }} />
                    <Button variant='warning text-light fw-semibold' style={{ height: "56px",width:'130px' }}>Subscribe</Button>
                </div>
            </div>
        </Container>
    );
};

export default ExtraSection2;