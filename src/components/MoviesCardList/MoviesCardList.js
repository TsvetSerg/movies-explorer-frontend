import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


function MoviesCardList({dataMovie, isSearchFilm, Message, savedMovie, isLikeFilm, isLiked, SavedMovieId, deletMovie, isLoading, isNotResult}) {

  const [loading, setLoading] = React.useState(false);
  const classNameMovieList = isSearchFilm || isLoading ? 'movies-list_not-list' : 'movies-list';

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
          />)
      })
      }
      {isNotResult ?
        '' :
        <h1 className='movies-list__message'>{Message}</h1>
      }


    </section>
  )
}
export default MoviesCardList;
// key={isSearchFilm ? movie.item.duration : movie.id}
