import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AddFavorite.css';

const AddFavorite = (props) => {
    const favoriteIcon = <FontAwesomeIcon icon={faHeart} />
    return (
        <button onClick={props.clickHandler} className="add-favorite-button" >
            {favoriteIcon} Add To Favorite
        </button>
    );
};

export default AddFavorite;