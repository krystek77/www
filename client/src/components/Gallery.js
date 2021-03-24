import React from 'react';
import { Modal } from '../components';
import { galleryImages as data } from '../fixtures';

function Gallery() {
  const [images, setImages] = React.useState([]);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [image, setImage] = React.useState({ src: '', alt: '' });
  const [currentIndexImage, setCurrentIndexImage] = React.useState(() => {
    return Math.floor(Math.random() * 11);
  });

  const handleOpeningModal = (e) => {
    const src = e.target.src;
    const alt = e.target.alt;
    const image = { src, alt };
    setImage(image);
    setIsOpenModal(true);
  };

  React.useEffect(() => {
    const choosenImages = data.sort(() => Math.random() - 0.5).slice(0, 11);
    setImages(choosenImages);

    return () => {};
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(function () {
      let nextIndexImage = Math.floor(Math.random() * 11);
      while (currentIndexImage === nextIndexImage) {
        nextIndexImage = Math.floor(Math.random() * 11);
      }
      setCurrentIndexImage(nextIndexImage);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndexImage]);

  React.useEffect(() => {
    if (!isOpenModal) {
      setImage({ src: '', alt: '' });
    }
  }, [isOpenModal]);

  return (
    <React.Fragment>
      {/** modal */}
      <Modal
        isShow={isOpenModal}
        handleModal={setIsOpenModal}
        type='modal--gallery'
      >
        <img className='modal__image' src={image.src} alt={image.alt} />
        <p className='modal__info'>{image.alt}</p>
      </Modal>
      {/** gallery */}
      {images.length > 0 ? (
        <div className='gallery' data-layout='1'>
          {images.map((item, index) => {
            const { id, src, alt } = item;
            return (
              <div
                className='gallery__image'
                data-position={index + 1}
                key={id}
              >
                <img
                  className={index === currentIndexImage ? 'active' : ''}
                  src={`../assets/images/gallery/${src}.webp`}
                  alt={alt}
                  width='960px'
                  height='600px'
                  onClick={handleOpeningModal}
                />
                <p className='gallery__info'>{alt}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </React.Fragment>
  );
}
export default Gallery;
