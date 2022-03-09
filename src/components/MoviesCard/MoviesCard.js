import './MoviesCard.css';

function MoviesCard({movie}) {
  return (
    <div className='movie'>
      <img className='movie__picture' src={movie.img} alt={movie.nameRU} />
      <div className='movie__wrapper'>
        <h1 className='movie__title'>{movie.nameRU}</h1>
        <button className='movie__like-btn '></button>
      </div>
      <p className='movie__time'>{movie.duration}</p>
    </div>
  )
}

export default MoviesCard;
