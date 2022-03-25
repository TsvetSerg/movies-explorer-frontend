import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


function MoviesCardList({dataMovie, isSearchFilm, Message, savedMovie}) {

  const [loading, setLoading] = React.useState(false)

  return (
    <section className='movies-list'>
      {loading ? <Preloader/> : ""}

      {isSearchFilm ?
      dataMovie.map((movie) => {
        return (<MoviesCard savedMovie={savedMovie} isSearchFilm={isSearchFilm} key={movie.id} movie={movie}/>)
      })
      : <h1>{Message}</h1>
      }



    </section>
  )
}
export default MoviesCardList;
// key={isSearchFilm ? movie.item.duration : movie.id}
