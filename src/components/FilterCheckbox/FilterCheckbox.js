import './FilterCheckbox.css'

function FilterCheckbox({durationFilter, checked}) {
  return (
    <div className='checkbox'>
      <label className='checkbox__lable'>
        <input type='checkbox'/>
        <span className='checkbox__slider round'></span>
      </label>
      <p className='checkbox__title'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
