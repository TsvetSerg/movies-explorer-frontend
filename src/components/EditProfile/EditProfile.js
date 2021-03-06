import './EditProfile.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
import { useFormValidation } from '../../utils/useFormValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { EMAIL_PATTERN } from '../../utils/constants';

function EditProfile({handelUpdate, authError, setAuthError, successfully, setSuccessfully}) {

  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [isError, serError] = React.useState('')

  function hendelSumbit(e) {
    e.preventDefault();
    if (values.name === currentUser.name || values.email === currentUser.email) {
      serError('Необходимо изменнить данные на новые.')
    } else {
      serError('');
      handelUpdate(values.name || currentUser.name, values.email || currentUser.email);
      resetForm();
    }

  }


  function hendelInput(e) {
    handleChange(e);
    if (authError.length > 0) {
      setAuthError('');
    }
  }

  function handelClearError() {
    setSuccessfully(false);
    resetForm();
  }


  return (
    <section className='auth'>
    <Link to="/"><img src={logo} alt="Логотип"/></Link>
    {successfully ?
      <>
        <h1 className='auth__title'>Вы успешно отредоктировали свой профиль.</h1>
        <Link onClick={handelClearError} className='auth__link' to="/profile">Назад</Link>
      </>
      :
      <>
        <h1 className='auth__title'>Редактировать профиль</h1>
        <form className='auth__form' onSubmit={hendelSumbit}>
          <p className='auth__input-title'>Имя</p>
          <input className='auth__input' value={values.name || currentUser.name} onChange={hendelInput} type="text" id="name" name="name" minLength='2' required />
          <span className='auth__error_email'>{errors.name}</span>
          <p className='auth__input-title'>E-mail</p>
          <input className='auth__input' value={values.email || currentUser.email} pattern={EMAIL_PATTERN} onChange={hendelInput}  type="text" id="email" name="email"  minLength='6' required />
          <span className='auth__error_password'>{errors.email}</span>
          <button className={isValid ? 'auth__button' : 'auth__button-disable'} type='sumbit' disabled={!isValid} >Сохранить</button>
        </form>
        <span className='auth__login-error'>{authError}</span>
        <span className='auth__login-error'>{isError}</span>
      </>
  }

  </section>
  )
}
 export default withRouter(EditProfile);
