import './SearchForm.css';
import React from 'react';
import image from '../../images/searchwhite.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({dataMovie, searchMovie}) {

  const [isText, setText] = React.useState('')

  function handelChangeInput(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  function handelSumbit(e) {
    e.preventDefault();
    searchMovie(isText)
    setText('')
  }

  return (
    <section className='searchForm'>
      <form className='searchForm__form' onSubmit={handelSumbit}>
        <div className='searchForm__wrapper'>
          <input onChange={handelChangeInput} value={isText} className='searchForm__input' type="text" id="search" name="search" placeholder='Фильм' minLength='1' required/>
          <button type='submit' className='searchForm__button'><img className='searchForm__image' src={image} alt="Кнопка поиска" /></button>
        </div>
        <FilterCheckbox/>
      </form>

    </section>
  )
}

export default SearchForm;
