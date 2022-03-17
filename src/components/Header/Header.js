import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation'

function Header({isLogin}) {
  return (
    <header className='header'>
      <Link to="/"><img src={logo} alt="Логотип" className='header__logo'/></Link>
      <Navigation isLogin={isLogin} />
    </header>
  )
}

export default Header;
