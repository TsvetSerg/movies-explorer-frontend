import './SearchForm.css';
import React from 'react';
import image from '../../images/searchwhite.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

function SearchForm({searchMovie, ChangeFilter, searchSavedMovie, ChangeFilterOut, isSlider, setSlider}) {

  const [isText, setText] = React.useState('')
  const [isValidation, setValidation] = React.useState(true)

  const { pathname } = useLocation();

  function handelChangeInput(e) {
    setText(e.target.value);
    setValidation(e.target.checkValidity());
  }

  function handelSumbit(e) {
    e.preventDefault();
    if (pathname === '/movies') {
      searchMovie(isText);
      setText(isText);
      localStorage.setItem('query', JSON.stringify(isText));
    } else if (pathname === '/saved-movies') {
      searchSavedMovie(isText);
      setText(isText);
      localStorage.setItem('query', JSON.stringify(isText));
    }
  }

  React.useEffect(() => {
    setText(JSON.parse(localStorage.getItem('query')))
  }, [])

  return (
    <section className='searchForm'>
      <form className='searchForm__form' onSubmit={handelSumbit}>
        <div className='searchForm__wrapper'>
          <input onChange={handelChangeInput} value={isText || ''} className='searchForm__input' type="text" id="search" name="search" placeholder='Фильм' minLength='1' required/>
          <button disabled={!isValidation} type='submit' className={isValidation ? 'searchForm__button' : 'searchForm__button-dis'}><img className='searchForm__image' src={image} alt="Кнопка поиска" /></button>
          <span className='searchForm__error'>{isValidation ? '' : 'Нужно ввести ключевое слово'}</span>
        </div>
        <FilterCheckbox isSlider={isSlider} setSlider={setSlider} ChangeFilterOut={ChangeFilterOut} ChangeFilter={ChangeFilter} />
      </form>


    </section>
  )
}

export default SearchForm;
