import './EditProfile.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function EditProfile() {
  return (
    <section className='auth'>
    <Link to="/"><img src={logo} alt="Логотип"/></Link>
    <h1 className='auth__title'>Редактировать профиль</h1>
    <form className='auth__form'>
      <p className='auth__input-title'>Имя</p>
      <input className='auth__input' type="text" id="name" name="editName" required />
      <p className='auth__input-title'>E-mail</p>
      <input className='auth__input' type="text" id="email" name="editMail" required />
      <button className='auth__button'>Сохранить</button>
    </form>
  </section>
  )
}
 export default EditProfile;
