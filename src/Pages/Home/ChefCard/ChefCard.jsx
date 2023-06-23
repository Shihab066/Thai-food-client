import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaRegHeart, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, chefName, chefPicture, experience, likes, numberOfRecipes } = chef;
    return (
        <div className='col'>
            <Card className='h-100 w-100'>
                <LazyLoad height={200}>
                    <Card.Img variant="top" src={chefPicture} style={{ height: "100%", width: "100%" }} />
                </LazyLoad>
                <Card.Body className='px-4'>
                    <Card.Title className='fw-bold'>{chefName}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='text-secondary fw-semibold mb-2'>Experience: {experience}</p>
                            <p className='text-secondary'>Recipes: {numberOfRecipes}</p>
                        </div>
                        <div>
                            <FaRegHeart className='mb-1 me-1 text-danger fs-5'></FaRegHeart> {likes}
                        </div>
                    </div>
                    <Link to={`/chefs/${id}`}><Button variant="warning" className='fw-semibold '>View Recipes </Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;