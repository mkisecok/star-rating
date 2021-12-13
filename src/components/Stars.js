import './Stars.css'
import React from 'react'
import { FaStar } from 'react-icons/fa';

const Stars = () => {
    return (
        <div className='container'>
            <div className='stars'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='rate-result'>
                <p>Your rating is : </p>
                <p>Thanks for your participation!</p>
            </div>
        </div>
    )
}

export default Stars
