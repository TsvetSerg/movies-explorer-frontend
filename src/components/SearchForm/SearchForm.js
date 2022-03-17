import './SearchForm.css';
import image from '../../images/searchwhite.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='searchForm'>
      <form className='searchForm__form'>
        <div className='searchForm__wrapper'>
        <input className='searchForm__input' type="text" id="search" name="search" placeholder='Фильм' required/>
        <button className='searchForm__button'><img className='searchForm__image' src={image} alt="Кнопка поиска" /></button>
        </div>
        <FilterCheckbox/>
      </form>

    </section>
  )
}

export default SearchForm;
