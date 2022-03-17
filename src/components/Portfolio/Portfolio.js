import './Portfolio.css'
import img from '../../images/link.svg'

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'><a href="https://github.com/" className='portfolio__link' target="_blank" rel="noreferrer">Статичный сайт</a><img src={img} alt="ссылка" /></li>
        <li className='portfolio__item'><a href="https://github.com/" className='portfolio__link' target="_blank" rel="noreferrer">Адаптивный сайт</a><img src={img} alt="ссылка" /></li>
        <li className='portfolio__item'><a href="https://github.com/" className='portfolio__link' target="_blank" rel="noreferrer">Одностраничное приложение</a><img src={img} alt="ссылка" /></li>
      </ul>
    </section>
  )
}

export default Portfolio;
