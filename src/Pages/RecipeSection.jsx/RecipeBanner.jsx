import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
const RecipeBanner = ({ chefData }) => {
    const { chefName, chefBannerPic, experience, likes, numberOfRecipes, description } = chefData;
    return (
        <div className="mt-5 row align-items-center rounded" style={{height:"700px",backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"}}>

            <div className='col'> 
                <img src={chefBannerPic} alt="" className='w-100'/>
            </div>
            
            <div className='col'>
                <p className='fs-2 fw-bold text-white'>{chefName}</p>
                <p className='text-white w-50'>{description}</p>
                <p className='fw-semibold text-white'>Experience: {experience}</p>
                <p className='text-white'><FaRegHeart className='text-danger  me-1'></FaRegHeart> {likes}</p>
                <p className='text-white'>{numberOfRecipes} Recipes</p>
            </div>
        </div>
    );
};

export default RecipeBanner;