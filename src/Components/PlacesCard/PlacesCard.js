import React from 'react';

const PlacesCard = (props) => {
    //destructuring props
    let { name, country, image, description, rating, travelCost } = props.place;
    return (
        <div>
            <img className="image" src={process.env.PUBLIC_URL + image} alt="" />
            <p>Name: {name}</p>
            <p>Country: {country}</p>
            <p>Description: {description}</p>
            <p>Rating: {rating}</p>
            <p>Estimated Travel Cost: {travelCost}</p>
        </div>
    );
};

export default PlacesCard;