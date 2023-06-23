import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
    const { recipeName, ingredients, cookingMethod, rating, itemImage } = recipe;
    const [active, setActive] = useState(false);

    const handleFavorite = () => {
        toast.success('Recipe is added to favorite', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        setActive(!active)
    }
    return (
        <Card className='w-100 mt-5 p-5'>
            <Card.Img variant="top" src={itemImage} className='h-100 w-100 rounded-5' />
            <Card.Body className='mt-3'>
                <div className='d-flex justify-content-between'>
                    <Card.Title className='fw-bold fs-4'>{recipeName}</Card.Title>
                    <p><FaStar className='text-warning me-1 mb-1'></FaStar>{rating}</p>
                </div>
                <div className='row mt-4'>
                    <div className='col'>
                        <p className='fw-semibold fs-5'>Ingredients</p>
                        <ul>
                            {ingredients.map(i => <li key={ingredients.indexOf(i)} className='mb-2 fw-semibold text-muted'>{i}</li>)}
                        </ul>
                    </div>
                    <div className='col'>
                        <p className='fw-semibold fs-5'>Cooking Method</p>
                        <ul className=''>
                            {cookingMethod.map(i => <li key={cookingMethod.indexOf(i)} className='fw-semibold text-muted'>{i}</li>)}
                        </ul>
                    </div>
                </div>
                <Button onClick={handleFavorite} variant="warning fw-semibold" disabled={active}>Add to Favorite</Button>
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;