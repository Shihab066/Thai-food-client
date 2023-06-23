import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../../assets/banner3.jpg'
const Banner = () => {
    return (
        <Container>
            <div className='position-relative'>
                <img src={banner} className='w-100' alt="" />
                <div className='position-absolute top-50 translate-middle' style={{left:"25%"}}>
                    <p className='fw-bold' id='banner-title'>
                        Discover the<br />Flavors of <br /><span style={{ color:"#F48E28"}}>Thailand</span>                
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Banner;