import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({movie, savedMovie, deletMovie, isLikeFilm, SavedMovieId, isLoading, deletSaveMovie}) {

  const isLike = SavedMovieId(movie)

  const { pathname } = useLocation();

  const cardLikeButtonClassName = `movie__like-btn ${isLike ? 'movie__like-btn_activ' : 'movie__like-btn'}`
  let classNameMovie = isLoading ? 'movie-dis' : 'movie';

  const classNameMovieee = classNameMov()

  function classNameMov() {
    if (pathname === '/saved-movies') {
      classNameMovie = !isLike ? 'movie-dis' : 'movie';
    } else {
      classNameMovie = isLoading ? 'movie-dis' : 'movie';
    }
  }

  function handelSaveMovie() {
    if (!isLike) {
      savedMovie(movie);
    } else if (isLike) {
      if (pathname === '/movies') {
        const result = deletSaveMovie.find((item) => item.nameRU === String(movie.nameRU))
        deletMovie(result._id)
      } else {
        deletMovie(movie._id)
      }

    }
  }


  return (
    <div className={classNameMovieee || classNameMovie}>
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
