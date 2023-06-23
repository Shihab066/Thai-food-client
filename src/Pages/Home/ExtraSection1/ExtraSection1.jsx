import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FoodCard from './FoodCard';

const ExtraSection1 = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://thai-food-server-shihab066.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (

        <Container id='recipe-section' style={{ marginBottom: "200px" }}>
            <div>
                <h2 className='text-center mb-5 fw-bold'>Most Popular Items</h2>
            </div>
            <div className='row row-cols-1 row-cols-md-3 mx-auto g-4'>
                {foods.map(food => <FoodCard
                    key={foods.indexOf(food)}
                    food={food}
                ></FoodCard>)}
            </div>
        </Container>

    );
};

export default ExtraSection1;