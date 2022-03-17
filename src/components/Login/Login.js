import './Login.css';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handelSumbit = this.handelSumbit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handelSumbit(e) {
    e.preventDefault();
    this.props.handelAutorize(this.state.email, this.state.password)
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }


  render () {
    return (
      <section className='auth'>
        <Link to="/"><img src={logo} alt="Логотип"/></Link>
        <h1 className='auth__title'>Рады видеть!</h1>
        <form className='auth__form' onSubmit={this.handelSumbit}>
          <p className='auth__input-title'>E-mail</p>
          <input className='auth__input' type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <p className='auth__input-title'>Пароль</p>
          <input className='auth__input' type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <button type='sumbit' className='auth__button'>Войти</button>
        </form>
        <p className='auth__subtitle'>Ещё не зарегистрированы? <Link className='auth__link' to="/signup">Регистрация</Link></p>
      </section>
    )
  }
}

export default withRouter(Login);
