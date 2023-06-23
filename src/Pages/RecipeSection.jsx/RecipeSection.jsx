import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeBanner from './RecipeBanner';
import RecipeCard from './RecipeCard';

const RecipeSection = () => {
    const chefData = useLoaderData();
    const { recipeData } = chefData;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Container >
                <RecipeBanner chefData={chefData}></RecipeBanner>
            </Container>
            <Container className='p-0' style={{ marginBottom: "300px" }}>
                {recipeData.map(recipe => <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                ></RecipeCard>

                )}
            </Container>
        </>
    );
};

export default RecipeSection;