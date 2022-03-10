import './MoviesCard.css';

function MoviesCard({movie, isLiked}) {

  const cardLikeButtonClassName = `movie__like-btn ${movie.isLiked ? 'movie__like-btn_activ' : 'movie__like-btn'}`

  return (
    <div className='movie'>
      <img className='movie__picture' src={movie.img} alt={movie.nameRU} />
      <div className='movie__wrapper'>
        <h1 className='movie__title'>{movie.nameRU}</h1>
        <button className={cardLikeButtonClassName}></button>
      </div>
      <p className='movie__time'>{movie.duration}</p>
    </div>
  )
}

export default MoviesCard;
