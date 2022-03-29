import './MoviesCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

function MoviesCard({movie, savedMovie, deletMovie, isLikeFilm, SavedMovieId, isLoading}) {

  const isLike = SavedMovieId(movie)

  const cardLikeButtonClassName = `movie__like-btn ${isLike ? 'movie__like-btn_activ' : 'movie__like-btn'}`
  const classNameMovie = isLoading ? 'movie-dis' : 'movie';

  function handelSaveMovie() {
    if (!isLike) {
      savedMovie(movie);
    } else if (isLike) {
      deletMovie(movie)
    }
  }




  return (
    <div className={classNameMovie}>
      <a rel="noreferrer" className='movie__link' target="_blank" href={movie.trailerLink}><img className='movie__picture' src={isLikeFilm ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} /></a>
      <div className='movie__wrapper'>
        <h1 className='movie__title'>{movie.nameRU}</h1>
        <button className={cardLikeButtonClassName} onClick={handelSaveMovie} ></button>
      </div>
      <p className='movie__time'>{movie.duration}М</p>
    </div>
  )
}

export default MoviesCard;
