import './FilterCheckbox.css'
import React from 'react';

function FilterCheckbox({ChangeFilter}) {

  function handleOnChange(e) {
    ChangeFilter(e.target.checked)
  }

  return (
    <div className='checkbox'>
      <label className='checkbox__lable'>
        <input
          type='checkbox'
          name='check'
          onChange={handleOnChange}
        />
        <span className='checkbox__slider round'></span>
      </label>
      <p className='checkbox__title'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
