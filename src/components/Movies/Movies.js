import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <section className='movies__containers'>
      <SearchForm/>
      <MoviesCardList/>
    </section>
  )
}

export default Movies;
