import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <nav className='footer__copyright'>
        <p className='footer__copyright-item'>&copy; 2022</p>
        <ul className='copyright__list'>
          <li className='copyright__item'><a className='copyright__link' href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
          <li className='copyright__item'><a className='copyright__link' href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
          <li className='copyright__item'><a className='copyright__link' href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
