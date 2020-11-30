import React from 'react';
import Film from './Film.js'

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return(
            <Film key={film.id} name={film.name} url={film.url}/>
        )
    })

    return(
        <div className="film-list">
            {filmNodes}
        </div>
    )
}

export default FilmList;