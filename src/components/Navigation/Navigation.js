import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({isLogin}) {
  return (
    <nav className='nav'>
      <ul className='nav__list'>

        {isLogin ?
          <>
            <li className='nav__item-log'><Link className='nav__link' to="/movies">Фильмы</Link></li>
            <li className='nav__item-log'><Link className='nav__link' to="/saved-movies">Сохранённые фильмы</Link></li>
            <li className='nav__item-log'><Link className='nav__link' to="/profile">Аккаунт</Link></li>
            <li className='nav__item-log'><button className='nav__button-log'></button></li>
          </>
         :
          <>
            <li className='nav__item'><Link to="/signup" className='nav__link'> Регистрация</Link></li>
            <li className='nav__item'><Link to="/signin"><button className='nav__button'>Войти</button></Link></li>
          </>
        }
      </ul>
    </nav>
  )
}
export default Navigation;
