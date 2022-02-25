import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='login'>
      <Link to="/"><img src={logo} alt="Логотип"/></Link>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form'>
        <p className='login__input-title'>E-mail</p>
        <input className='login__input' type="text" id="email" name="email" required />
        <p className='login__input-title'>Пароль</p>
        <input className='login__input' type="password" id="password" name="password" required />
        <button className='login__button'>Войти</button>
      </form>
      <p className='login__subtitle'>Ещё не зарегистрированы? <Link className='login__link' to="/signup">Регистрация</Link></p>
    </section>
  )
}

export default Login;
