import './MoviesCard.css';

function MoviesCard({movie, isLiked, isSearchFilm}) {

  const cardLikeButtonClassName = `movie__like-btn ${movie.isLiked ? 'movie__like-btn_activ' : 'movie__like-btn'}`

  return (
    <div className='movie'>
      <img className='movie__picture' src={isSearchFilm ? `https://api.nomoreparties.co${movie.item.image.url}` :  `https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} />
      <div className='movie__wrapper'>
        <h1 className='movie__title'>{isSearchFilm ? movie.item.nameRU : movie.nameRU}</h1>
        <button className={cardLikeButtonClassName}></button>
      </div>
      <p className='movie__time'>{isSearchFilm ? movie.item.duration : movie.duration}М</p>
    </div>
  )
}

export default MoviesCard;
