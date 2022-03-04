import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <section className='movies__containers'>
      <SearchForm/>
      <MoviesCardList/>
      <button className='movies__more'>Еще</button>
    </section>
  )
}

export default Movies;
