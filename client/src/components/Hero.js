import { Link } from 'react-router-dom';
import { useNavigationContext } from '../contexts/navigation';
function Hero() {
  const { submenuRectDOM, closeSubmenu } = useNavigationContext();
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
  return (
    <header className='hero' onMouseMove={(e) => close(e)}>
      <div className='hero__wrapper'>
        <article className='hero__content'>
          <h1 className='hero__title'>Poznaj lepsze wyposażenie pralnicze</h1>
          <p className='hero__description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic a
            aperiam magnam perferendis nam iste architecto? Assumenda dicta
            sapiente aspernatur consequuntur accusantium error obcaecati optio
            commodi natus. Reiciendis, laboriosam porro!
          </p>
          <Link className='btn btn--action' type='button' to='/'>
            Dowiedz się więcej
          </Link>
        </article>
        <div className='hero__image'>
          <img
            className='hero__bg'
            src='../assets/images/poznaj_test.png'
            alt='hero1'
            width='512'
            height='820'
          />
        </div>
      </div>
    </header>
  );
}
export default Hero;
