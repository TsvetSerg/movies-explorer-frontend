import './Register.css';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import { useFormValidation } from '../../utils/useFormValidation';

function Register({handelRegistr, authError, setAuthError}) {

  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  function handelSumbit(e) {
    e.preventDefault();
    handelRegistr(values.name, values.email, values.password);
    resetForm();
  }

  function handleChangeInput(e) {
    handleChange(e);
    if (authError.length > 0) {
      setAuthError('');
    }
  }

  function handelClearError() {
    resetForm();
  }

  return (
    <section className='auth'>
      <Link to="/"><img src={logo} alt="Логотип"/></Link>
      <h1 className='auth__title'>Добро пожаловать!</h1>
      <form className='auth__form' onSubmit={handelSumbit}>
        <p className='auth__input-title'>Имя</p>
        <input className='auth__input' type="text" id="name" name="name" value={values.name || ''} onChange={handleChangeInput} required minLength='2' />
        <span className='auth__error_email'>{errors.name}</span>
        <p className='auth__input-title'>E-mail</p>
        <input className='auth__input' type="text" id="email" name="email" value={values.email || ''} onChange={handleChangeInput} required minLength='6' />
        <span className='auth__error_email'>{errors.email}</span>
        <p className='auth__input-title'>Пароль</p>
        <input className='auth__input' type="password" id="password" name="password" value={values.password || ''} onChange={handleChangeInput} required minLength='6' />
        <span className='auth__error_password'>{errors.password}</span>
        <button type='sumbit' className={isValid ? 'auth__button' : 'auth__button-disable'} disabled={!isValid} >Зарегистрироваться</button>
      </form>
      <span className='auth__login-error'>{authError}</span>
      <p className='auth__subtitle'>Уже зарегистрированы?<Link onClick={handelClearError} className='auth__link' to="/signin">Войти</Link></p>
    </section>
  )
}



export default withRouter(Register);
