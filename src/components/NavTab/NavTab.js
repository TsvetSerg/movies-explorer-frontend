import './NavTab.css';

function NavTab() {
  return (
    <ul className='navigate'>
      <li> <a href="#about"><button className='navigate__button'>О проекте</button></a></li>
      <li><a href="#techs"><button className='navigate__button'>Технологии</button></a></li>
      <li><a href="#about-me"><button className='navigate__button'>Студент</button></a></li>
    </ul>
  )
}

export default NavTab;
