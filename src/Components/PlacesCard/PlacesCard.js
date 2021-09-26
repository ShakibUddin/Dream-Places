import React from 'react';
import AddFavorite from '../AddFavorite/AddFavorite';
import './PlacesCard.css';

const PlacesCard = (props) => {
    //destructuring props
    let { name, country, image, description, rating, travelCost } = props.place;
    return (
        <div className="place-card">
            <div>
                <img className="image" src={process.env.PUBLIC_URL + image} alt="" />
                <div className="place-content">
                    <p><b>Name:</b> {name}</p>
                    <p><b>Country:</b> {country}</p>
                    <p className="place-description"><b>Description:</b> {description}</p>
                    <p><b>Rating:</b> {rating}</p>
                    <p><b>Estimated Travel Cost:</b> {travelCost}</p>
                </div>
            </div>
            <AddFavorite></AddFavorite>
        </div>
    );
};

export default PlacesCard;