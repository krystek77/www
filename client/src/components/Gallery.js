import React from 'react';
const galleryImages = Array.from({ length: 20 }, (item, index) =>
  String(index + 1)
);
const galleryLayout = Array.from({ length: 3 }, (item, index) =>
  String(index + 1)
);
console.log(galleryImages);
console.log(galleryLayout);

function Gallery() {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {}, []);
  return (
    <div className='gallery' data-layout='1'>
      <div className='gallery__image' data-position='1'>
        <img
          src='../assets/images/gallery/1.png'
          alt='pralnia_1'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='2'>
        <img
          src='../assets/images/gallery/2.png'
          alt='pralnia_2'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='3'>
        <img
          src='../assets/images/gallery/3.png'
          alt='pralnia_3'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='4'>
        <img
          src='../assets/images/gallery/4.png'
          alt='pralnia_4'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='5'>
        <img
          src='../assets/images/gallery/5.png'
          alt='pralnia_5'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='6'>
        <img
          src='../assets/images/gallery/6.webp'
          alt='pralnia_6'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='7'>
        <img
          src='../assets/images/gallery/7.png'
          alt='pralnia_7'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='8'>
        <img
          src='../assets/images/gallery/8.png'
          alt='pralnia_8'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='9'>
        <img
          src='../assets/images/gallery/9.png'
          alt='pralnia_9'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='10'>
        <img
          src='../assets/images/gallery/10.png'
          alt='pralnia_10'
          width='960px'
          height='600px'
        />
      </div>
      <div className='gallery__image' data-position='11'>
        <img
          src='../assets/images/gallery/11.png'
          alt='pralnia_11'
          width='960px'
          height='600px'
        />
      </div>
    </div>
  );
}
export default Gallery;
