import React from 'react';

const Film = ({name, url}) => {
    return(
        <div className="film">
            <a href={url}><h2>{name}</h2></a>
        </div>
    )
}

export default Film;