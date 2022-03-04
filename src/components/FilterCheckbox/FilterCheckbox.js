import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <form className='checkbox'>
      <label className='checkbox__lable' for='checkbox'>
        <input className='checkbox__input' id='checkbox' name='checkbox' type="checkbox" />
        Короткометражки
      </label>
    </form>
  )
}

export default FilterCheckbox;
