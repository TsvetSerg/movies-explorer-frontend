import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'><Link to="/signup" className='nav__link'> Регистрация</Link></li>
        <li className='nav__item'><Link to="/signin"><button className='nav__button'>Войти</button></Link></li>
      </ul>
    </nav>
  )
}
export default Navigation;
