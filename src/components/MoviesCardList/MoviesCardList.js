import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import img1 from '../../images/pic-1.jpg';
import img2 from '../../images/pic-2.jpg';
import img3 from '../../images/pic-3.jpg';
import img4 from '../../images/pic-4.jpg';
import img5 from '../../images/pic-5.jpg';
import img6 from '../../images/pic-6.jpg';
import img7 from '../../images/pic-7.jpg';
import img8 from '../../images/pic-8.jpg';
import Preloader from '../Preloader/Preloader';


function MoviesCardList() {
  return (
    <section className='movies-list'>
      {/* <Preloader/> */}
      <MoviesCard
        img={img1}
        title='33 слова о дизайне'
        time='1ч42м'
      />
      <MoviesCard
        img={img2}
        title='Киноальманах «100 лет дизайна»'
        time='1ч 42м'
      />
      <MoviesCard
        img={img3}
        title='В погоне за Бенкси'
        time='1ч 42м'
      />
      <MoviesCard
        img={img4}
        title='Баския: Взрыв реальности'
        time='1ч 42м'
      />
      <MoviesCard
        img={img5}
        title='Бег это свобода'
        time='1ч 42м'
      />
      <MoviesCard
        img={img6}
        title='Книготорговцы'
        time='1ч 42м'
      />
      <MoviesCard
        img={img7}
        title='Когда я думаю о Германии ночью'
        time='1ч 42м'
      />
      <MoviesCard
        img={img8}
        title='Gimme Danger: История Игги и The Stooges'
        time='1ч 42м'
      />
    </section>
  )
}
export default MoviesCardList;
