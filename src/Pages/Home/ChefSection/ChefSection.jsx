import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ChefCard from '../ChefCard/ChefCard';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://thai-food-server-shihab066.vercel.app/chefs/')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (

        <Container  >
            <div>
                <p className='text-center fs-1 fw-bold mt-5'>Our Most Popular Chefs</p>
            </div>
            <div id='chef-section-margin' className=' row row-cols-1 row-cols-md-3 mx-auto g-4 mt-5 ' style={{marginBottom: '150px'}}>
                {chefs.map(chef => <ChefCard
                    key={chef.id}
                    chef={chef}
                ></ChefCard>)}
            </div>
        </Container>


    );
};

export default ChefSection;