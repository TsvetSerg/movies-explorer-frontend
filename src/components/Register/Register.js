import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className='register'>
      <Link to="/"><img src={logo} alt="Логотип"/></Link>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
        <p className='register__input-title'>Имя</p>
        <input className='register__input' type="text" id="name" name="name" required />
        <p className='register__input-title'>E-mail</p>
        <input className='register__input' type="text" id="email" name="email" required />
        <p className='register__input-title'>Пароль</p>
        <input className='register__input' type="password" id="password" name="password" required />
        <button className='register__button'>Зарегистрироваться</button>
      </form>
      <p className='register__subtitle'>Уже зарегистрированы?<Link className='register__link' to="/signin">Войти</Link></p>
    </section>
  )
}

export default Register;
