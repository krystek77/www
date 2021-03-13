import React from 'react';
import { ButtonLink } from '../components';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigationContext } from '../contexts/navigation';
import { hero } from '../fixtures';

function Hero() {
  const { submenuRectDOM, closeSubmenu } = useNavigationContext();
  const [data, setData] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const close = (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    if (
      posX < submenuRectDOM.left ||
      posX > submenuRectDOM.right ||
      posY > submenuRectDOM.bottom
    ) {
      closeSubmenu();
    }
  };
  React.useEffect(() => {
    setData(hero);
    const lastIndex = data.length - 1;
    if (currentIndex < 0) setCurrentIndex(lastIndex);
    if (currentIndex > lastIndex) setCurrentIndex(0);
    const timer = setTimeout(() => {
      setCurrentIndex((index) => index + 1);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, data]);

  return (
    <header className='hero' onMouseMove={(e) => close(e)}>
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`hero__image ${
              index === currentIndex ? 'hero__image--show' : ''
            }`}
          >
            <img
              className='hero__bg'
              src={`../assets/images/${item.image.src}.png`}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
            />
          </div>
        );
      })}
      <button
        type='button'
        className='btn btn--prev'
        onClick={() => setCurrentIndex((current) => current - 1)}
      >
        <FaArrowCircleLeft />
      </button>
      <button
        type='button'
        className='btn btn--next'
        onClick={() => setCurrentIndex((current) => current + 1)}
      >
        <FaArrowCircleRight />
      </button>
      <div className='hero__indicators'>
        {data.map((item, index) => {
          return (
            <button
              type='button'
              onClick={() => setCurrentIndex(index)}
              className={`btn hero__indicator ${
                index === currentIndex ? 'active' : ''
              }`}
              key={item.id}
            ></button>
          );
        })}
      </div>
      <div className='hero__wrapper'>
        {data.map((item, index) => {
          let currentClass = 'hero__slide--next';
          if (index === currentIndex) currentClass = 'hero__slide--current';
          if (index === currentIndex - 1) currentClass = 'hero__slide--prev';
          if (currentIndex === 0 && index === data.length - 1)
            currentClass = 'hero__slide--prev';
          return (
            <div className={`hero__slide ${currentClass}`} key={item.id}>
              <article className='hero__content'>
                <h1 className='hero__title'>{item.title}</h1>
                <p className='hero__description'>{item.description}</p>
                <ButtonLink
                  label={item.action}
                  to={item.to}
                  type={'btn-link__action'}
                />
              </article>
            </div>
          );
        })}
      </div>
    </header>
  );
}
export default Hero;
