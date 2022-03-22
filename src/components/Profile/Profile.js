import './Profile.css'
import React from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  function handelLogOut(e) {
    e.preventDefault()
    props.handelTokenRemove()
  }


  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <div className='profile__area'>
        <p className='profile__name'>Имя</p>
        <p className='profile__value'>{currentUser.name}</p>
      </div>
      <div className='profile__area'>
        <p className='profile__name'>E-mail</p>
        <p className='profile__value'>{currentUser.email}</p>
      </div>
      <Link className='profile__edit' to="/edit-profile">Редактировать</Link>
      <Link className='profile__loguot' to="/" onClick={handelLogOut}>Выйти из аккаунта</Link>

    </section>
  )
}


export default Profile;
