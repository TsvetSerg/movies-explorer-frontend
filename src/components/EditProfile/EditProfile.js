import './EditProfile.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../utils/useFormValidation';

function EditProfile() {

  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  function hendelSumbit(e) {
    e.preventDefault();
    // обновыление
    resetForm();
  }

  function hendelInput(e) {
    handleChange(e);
  }


  return (
    <section className='auth'>
    <Link to="/"><img src={logo} alt="Логотип"/></Link>
    <h1 className='auth__title'>Редактировать профиль</h1>
    <form className='auth__form' onSubmit={hendelSumbit}>
      <p className='auth__input-title'>Имя</p>
      <input className='auth__input' value={values.name || ''} onChange={hendelInput} type="text" id="name" name="editName" required />
      <span className='auth__error_email'>{errors.name}</span>
      <p className='auth__input-title'>E-mail</p>
      <input className='auth__input' value={values.email || ''} onChange={hendelInput}  type="text" id="email" name="editMail" required />
      <span className='auth__error_password'>{errors.email}</span>
      <button className={isValid ? 'auth__button' : 'auth__button-disable'}>Сохранить</button>
    </form>
  </section>
  )
}
 export default EditProfile;
