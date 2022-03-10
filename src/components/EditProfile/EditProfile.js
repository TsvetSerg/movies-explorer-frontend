import './EditProfile.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function EditProfile() {
  return (
    <section className='login'>
    <Link to="/"><img src={logo} alt="Логотип"/></Link>
    <h1 className='login__title'>Редактировать профиль</h1>
    <form className='login__form'>
      <p className='login__input-title'>Имя</p>
      <input className='login__input' type="text" id="name" name="name" required />
      <p className='login__input-title'>E-mail</p>
      <input className='login__input' type="text" id="email" name="email" required />
      <button className='login__button'>Сохранить</button>
    </form>
  </section>
  )
}
 export default EditProfile;
