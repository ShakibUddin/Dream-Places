import React from 'react';
import './FavoriteCard.css';

const FavoriteCard = (props) => {
    let { name, country, image, description, rating, travelCost } = props.place;
    return (
        <div className="favorite-card">
            <img className="favorite-image" src={process.env.PUBLIC_URL + image} alt="" />
            <p>{name},{country}</p>
        </div>
    );
};

export default FavoriteCard;