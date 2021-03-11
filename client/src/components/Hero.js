import React from 'react';
import { Link } from 'react-router-dom';
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
    setData(() => hero);
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
                <Link className='btn btn--action' type='button' to='/'>
                  {item.action}
                </Link>
              </article>
              <div className='hero__image'>
                <img
                  className='hero__bg'
                  src={`../assets/images/${item.image.src}.png`}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
}
export default Hero;
