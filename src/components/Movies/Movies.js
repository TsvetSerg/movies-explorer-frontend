import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({dataMovie, searchMovie, isSearchFilm, Message, savedMovie, isLiked, SavedMovieId, deletMovie, handelChangeFilter, isLoading, isNotResult}) {

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

  function resizeWindow() {
    setTimeout(() => {
      if (window.innerWidth > 1280) {
        setMoviesOnDisplay(12);
        setMoreMovies(4);
      } else if (window.innerWidth > 768) {
        setMoviesOnDisplay(8);
        setMoreMovies(2);
      } else if (window.innerWidth > 320) {
        setMoviesOnDisplay(5);
        setMoreMovies(2);
      }
    }, 500)

  }

  const MovieBase = dataMovie.slice(0, MoviesOnDisplay)
  function handelMoreMovies(e) {
    e.preventDefault();
    setMoviesOnDisplay(m => m + AddMoreMovies)
  }

  React.useEffect(() => {
      window.addEventListener('resize', resizeWindow);
  }, []);

  return (
    <section className='movies__containers'>
      <SearchForm dataMovie={dataMovie} searchMovie={searchMovie} ChangeFilter={handelChangeFilter} />
      <MoviesCardList isNotResult={isNotResult} isLoading={isLoading} deletMovie={deletMovie} SavedMovieId={SavedMovieId} isLiked={isLiked} savedMovie={savedMovie} Message={Message} dataMovie={MovieBase} isSearchFilm={isSearchFilm}/>
      {isNotResult ?
        <button onClick={handelMoreMovies} className={MovieBase.length === dataMovie.length ? 'movies__more-dis' : 'movies__more'}>Еще</button>
         :
        ''
      }




    </section>
  )
}

export default Movies;
