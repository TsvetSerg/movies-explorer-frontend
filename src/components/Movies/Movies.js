import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesData from '../../utils/movieData';

function Movies() {

  return (
    <section className='movies__containers'>
      <SearchForm/>
      <MoviesCardList dataMovie={moviesData}/>
      <button className='movies__more'>Еще</button>
    </section>
  )
}

export default Movies;
