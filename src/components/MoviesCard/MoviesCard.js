import './MoviesCard.css';

function MoviesCard({movie, isLiked, isSearchFilm, savedMovie}) {

  const cardLikeButtonClassName = `movie__like-btn ${movie.isLiked ? 'movie__like-btn_activ' : 'movie__like-btn'}`

  function handelSaveMovie() {
    savedMovie(movie.item);
  }

  return (
    <div className='movie'>
      <img className='movie__picture' src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} />
      <div className='movie__wrapper'>
        <h1 className='movie__title'>{movie.nameRU}</h1>
        <button className={cardLikeButtonClassName} onClick={handelSaveMovie} ></button>
      </div>
      <p className='movie__time'>{movie.duration}М</p>
    </div>
  )
}

export default MoviesCard;
