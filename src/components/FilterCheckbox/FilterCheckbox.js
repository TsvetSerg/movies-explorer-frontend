import './FilterCheckbox.css'
import React from 'react';

function FilterCheckbox({ChangeFilter, ChangeFilterOut, isSlider, setSlider}) {


  function handleOnChange(e) {
    if (!isSlider) {
      ChangeFilter(e.target.checked)
      setSlider(true);
    } else if (isSlider) {
      ChangeFilterOut(e.target.checked);
      setSlider(false);
    }
  }


  return (
    <div className='checkbox'>
      <label className='checkbox__lable'>
        <input
          type='checkbox'
          name='check'
          onChange={handleOnChange}
          checked={isSlider}
        />
        <span className='checkbox__slider round'></span>
      </label>
      <p className='checkbox__title'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
