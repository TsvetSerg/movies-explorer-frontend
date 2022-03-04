import './MoviesCard.css';
import img from '../../images/pic-1.jpg'

function MoviesCard(props) {
  return (
    <div className='movie'>
      <img className='movie__picture' src={props.img} alt={props.title} />
      <div className='movie__wrapper'>
        <h1 className='movie__title'>{props.title}</h1>
        <button className='movie__like-btn '></button>
      </div>
      <p className='movie__time'>{props.time}</p>
    </div>
  )
}

export default MoviesCard;
