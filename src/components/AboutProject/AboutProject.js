import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <a name='about'></a>
      <h3 className='main__title'>О проекте</h3>
      <section className='about-project__description'>
        <div className='about-project__stages'>
          <h3 className='about-project__heading'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__subheading'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__stages'>
          <h3 className='about-project__heading'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__subheading'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </section>
      <section className='about-project__infographics'>
          <div className='about-project__info'>
            <p className='about-project__info-title'>1 неделя</p>
            <p className='about-project__info-subtitle'>Back-end</p>
          </div>
          <div className='about-project__info'>
            <p className='about-project__info-title about-project__info-title_black'>4 недели</p>
            <p className='about-project__info-subtitle'>Front-end</p>
          </div>
        </section>
    </section>
  )
}

export default AboutProject;
