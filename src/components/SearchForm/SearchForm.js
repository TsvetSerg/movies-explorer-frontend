import './SearchForm.css';
import image from '../../images/searchwhite.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='searchForm'>
      <form className='searchForm__form'>
        <input className='searchForm__input' type="text" id="search" name="search" placeholder='Фильм' />
        <button className='searchForm__button'><img className='searchForm__image' src={image} alt="Кнопка поиска" /></button>
        <FilterCheckbox/>
      </form>
    </section>
  )
}

export default SearchForm;
