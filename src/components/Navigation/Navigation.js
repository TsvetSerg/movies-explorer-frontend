import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import CloseBtn from '../../images/icon-close-btn.svg'

function Navigation({isLogin}) {

  const [isBurgerMenu, setBurgerMenu] = React.useState(false);

  function closeBurgerMenu() {
    setBurgerMenu(false)
  }

  function handelBurgerMenu() {
    setBurgerMenu(true);
  }

  return (
    <nav className='nav'>
      <ul className='nav__list'>

        {isLogin ?
          <>
          <div className='navigate-wrapper'>
            <li className='nav__item-log'><Link className='nav__link' to="/movies">Фильмы</Link></li>
            <li className='nav__item-log'><Link className='nav__link' to="/saved-movies">Сохранённые фильмы</Link></li>
            <li className='nav__item-log'><Link className='nav__link' to="/profile">Аккаунт</Link></li>
            <li className='nav__item-log'><button className='nav__button-log'></button></li>
          </div>
            <li><button className='burger__button' onClick={handelBurgerMenu}></button></li>
          </>

         :
          <>
            <li className='nav__item'><Link to="/signup" className='nav__link'> Регистрация</Link></li>
            <li className='nav__item'><Link to="/signin"><button className='nav__button'>Войти</button></Link></li>
          </>
        }

        {isBurgerMenu ?
          <div className='burger'>
            <img onClick={closeBurgerMenu} className='burger__close-btn' src={CloseBtn} alt="Закрыть" />
            <ul className='burger__list'>
              <li className='burger__item'><Link className='burger__link' to="/">Главная</Link></li>
              <li className='burger__item'><Link className='burger__link' to="/movies">Фильмы</Link></li>
              <li className='burger__item'><Link className='burger__link' to="/saved-movies">Сохранённые фильмы</Link></li>
              <li className='burger__item'><Link className='burger__link' to="/profile">Аккаунт</Link><button className='nav__button-log'></button></li>
            </ul>
          </div>
          : ""}
      </ul>
    </nav>
  )
}
export default Navigation;
