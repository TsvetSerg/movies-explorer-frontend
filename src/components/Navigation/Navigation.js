import React from 'react';
import './Navigation.css';
// import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item nav__link'>Регистрация</li>
        <li className='nav__item'><button className='nav__button'>Войти</button></li>
      </ul>
    </nav>
  )
}
export default Navigation;
