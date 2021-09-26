import React from 'react';
import './FavoriteCard.css';

const FavoriteCard = (props) => {
    //destructuring props
    let { name, country, image } = props.place;
    return (
        <div className="favorite-card animate__bounceIn">
            <img className="favorite-image" src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default FavoriteCard;