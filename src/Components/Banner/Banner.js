import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <p className='banner-title'>DREAM PLACES</p>
                <p className='banner-quote'><q>Places to visit when I get Rich</q></p>
                <h2>Budget: $1000000</h2>
            </div>
        </div>
    );
};

export default Banner;