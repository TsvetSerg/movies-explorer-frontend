import './MoviesCard.css';
import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function MoviesCard({movie, isLiked, isSearchFilm, savedMovie, isLikeFilm, SavedMovieId}) {

  const isLike = SavedMovieId(movie)

  const cardLikeButtonClassName = `movie__like-btn ${isLike ? 'movie__like-btn_activ' : 'movie__like-btn'}`

  function handelSaveMovie() {
    if(!isLike) {
      savedMovie(movie);
    }
  }

  return (
    <div className='movie'>
      <img className='movie__picture' src={isLikeFilm ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} />
      <div className='movie__wrapper'>
        <h1 className='movie__title'>{movie.nameRU}</h1>
        <button className={cardLikeButtonClassName} onClick={handelSaveMovie} ></button>
      </div>
      <p className='movie__time'>{movie.duration}М</p>
    </div>
  )
}

export default MoviesCard;
