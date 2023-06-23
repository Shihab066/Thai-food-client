import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

const FoodCard = ({ food }) => {
    const { foodImage, foodName, rating, description } = food;
    return (
        <div className='col'>
            <CardGroup className='w-100 h-100'>
                <Card className=' p-3 rounded-3'>
                    <LazyLoad height={200}>
                        <Card.Img variant="top" src={foodImage} className='w-100 rounded-4' />
                    </LazyLoad>
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <Card.Title>{foodName}</Card.Title>
                            <p><FaStar className='text-warning me-1 mb-1'></FaStar>{rating}</p>
                        </div>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default FoodCard;