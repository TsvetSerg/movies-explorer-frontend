import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='auth'>
      <Link to="/"><img src={logo} alt="Логотип"/></Link>
      <h1 className='auth__title'>Рады видеть!</h1>
      <form className='auth__form'>
        <p className='auth__input-title'>E-mail</p>
        <input className='auth__input' type="text" id="email" name="email" required />
        <p className='auth__input-title'>Пароль</p>
        <input className='auth__input' type="password" id="password" name="password" required />
        <button className='auth__button'>Войти</button>
      </form>
      <p className='auth__subtitle'>Ещё не зарегистрированы? <Link className='auth__link' to="/signup">Регистрация</Link></p>
    </section>
  )
}

export default Login;
