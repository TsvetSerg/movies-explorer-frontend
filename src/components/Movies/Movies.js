import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({dataMovie, searchMovie, isSearchFilm, Message, ChangeFilter, savedMovie, isLiked, SavedMovieId}) {

  const [MoviesOnDisplay, setMoviesOnDisplay] = React.useState(() => {

    if (window.innerWidth > 1280) {
      return 12
    } else if (window.innerWidth > 768) {
      return 8
    } else if (window.innerWidth > 320) {
      return 5
    }
  });

  const [AddMoreMovies, setMoreMovies] = React.useState(() => {
    if (window.innerWidth > 1280) {
      return 4
    } else if (window.innerWidth > 768) {
      return 2
    } else if (window.innerWidth > 320) {
      return 2
    }
  });

  const MovieBase = dataMovie.slice(0, MoviesOnDisplay)
  function handelMoreMovies(e) {
    e.preventDefault();
    setMoviesOnDisplay(m => m + AddMoreMovies)
  }

  return (
    <section className='movies__containers'>
      <SearchForm dataMovie={dataMovie} searchMovie={searchMovie} ChangeFilter={ChangeFilter} />
      <MoviesCardList SavedMovieId={SavedMovieId} isLiked={isLiked} savedMovie={savedMovie} Message={Message} dataMovie={MovieBase} isSearchFilm={isSearchFilm}/>
      <button onClick={handelMoreMovies} className='movies__more'>Еще</button>
    </section>
  )
}

export default Movies;
