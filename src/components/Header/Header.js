import logo from '../../images/logo.svg';
// import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation'

function Header() {
  return (
    <header className='header'>
      {/* <Link to="/"><img src={logo} alt="Логотип" className='header__logo'/></Link> */}
      <img src={logo} alt="Логотип" className='header__logo'/>

      <Navigation/>
    </header>
  )
}

export default Header;
