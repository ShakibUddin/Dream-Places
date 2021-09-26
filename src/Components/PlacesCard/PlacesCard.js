import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AddFavorite from '../AddFavorite/AddFavorite';
import './PlacesCard.css';

const PlacesCard = (props) => {
    //destructuring props
    let { name, country, image, description, rating, travelCost } = props.place;
    const ratingIcon = <FontAwesomeIcon icon={faStar} />

    return (
        <div className="place-card">
            <div>
                <img className="image" src={image} alt="" />
                <div className="place-content">
                    <p><span>Name:</span> {name}</p>
                    <p><span>Country:</span> {country}</p>
                    <p className="place-description"><span>Description:</span> {description}</p>
                    <p><span>Rating:</span> {rating} {ratingIcon}</p>
                    <p><span>Estimated Travel Cost:</span> ${travelCost}</p>
                </div>
            </div>
            <AddFavorite clickHandler={() => { props.clickHandler(props.place) }}></AddFavorite>
        </div>
    );
};

export default PlacesCard;