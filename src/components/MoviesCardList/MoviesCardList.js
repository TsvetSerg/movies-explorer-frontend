import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';


function MoviesCardList({dataMovie, isSearchFilm, Message, savedMovie, isLikeFilm, isLiked, SavedMovieId, deletMovie, isLoading, isNotResult, deletSaveMovie}) {

  const classNameMovieList = isSearchFilm || isLoading ? 'movies-list_not-list' : 'movies-list';
  const pathname = useLocation();
  const [isNoMovie, setNoMovie] = React.useState(false);

  React.useEffect(() => {
    const movie = document.getElementById('more');
    console.log(movie);
    if(pathname === '/saved-movies') {
      if (!movie == null) {
        setNoMovie(true)
      } else {
        setNoMovie(false)
      }
    }

  }, [pathname])



  return (
    <section className={classNameMovieList}>
      {isLoading ? <Preloader/> : ""}

      {isSearchFilm ?
       ''
      : dataMovie.map((movie) => {
        return (<MoviesCard
          deletMovie={deletMovie}
          SavedMovieId={SavedMovieId}
          isLiked={isLiked}
          isLikeFilm={isLikeFilm}
          savedMovie={savedMovie}
          isSearchFilm={isSearchFilm}
          key={isLikeFilm ? movie._id : movie.id}
          movie={movie}
          isLoading={isLoading}
          deletSaveMovie={deletSaveMovie}
          />)
      })
      }
      {isNotResult ?
        '' :
        <h1 className='movies-list__message'>{Message}</h1>
      }

      {isNoMovie ? <h1 className='movies-list__message'>Ничего не найдено1111</h1> : ''}


    </section>
  )
}
export default MoviesCardList;
