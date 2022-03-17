import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


function MoviesCardList({dataMovie}) {

  const [loading, setLoading] = React.useState(false)

  return (
    <section className='movies-list'>
      {loading ? <Preloader/> : ""}

      {dataMovie.map((movie) => {
        return (<MoviesCard key={movie.id} movie={movie}/>)
      })}
    </section>
  )
}
export default MoviesCardList;
