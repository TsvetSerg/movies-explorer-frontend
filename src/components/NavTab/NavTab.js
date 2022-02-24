import './NavTab.css';

function NavTab() {
  return (
    <ul className='navigate'>
      <li><button className='navigate__button'>О проекте</button> </li>
      <li><button className='navigate__button'>Технологии</button></li>
      <li><button className='navigate__button'>Студент</button></li>
    </ul>
  )
}

export default NavTab;
