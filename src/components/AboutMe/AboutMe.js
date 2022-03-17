import './AboutMe.css';
import img from '../../images/foto.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <a name='about-me'></a>
      <h3 className='main__title'>Студент</h3>
      <div className='about-me__info'>
        <img src={img} alt="Фото автора" className='about-me__images' />
        <div className='about-me__container'>
          <h2 className='about-me__name'>Виталий</h2>
          <p className='about-me__about'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className='social'>
            <li className='social__link'>Facebook</li>
            <li className='social__link'>Github</li>
          </ul>
        </div>
        {/* <div>
          <img src={img} alt="Фото автора" className='about-me__images' />
        </div> */}
      </div>

    </section>
  )
}

export default AboutMe;
