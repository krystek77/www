import React from 'react';
import { businessPartners } from '../fixtures';

function BusinessPartners() {
  const [data, setData] = React.useState([]);
  const [currentImage, setCurrentImage] = React.useState(1);

  React.useEffect(() => {
    setData(businessPartners);
    const timer = setTimeout(function () {
      const lastIndex = data.length - 1;
      if (currentImage === lastIndex) {
        setCurrentImage(0);
      } else {
        setCurrentImage((prevCurrentImage) => prevCurrentImage + 1);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentImage, data.length]);

  return data.length > 0 ? (
    <div className='business-partners'>
      {data.map((item, index) => {
        const { id, src, alt } = item;
        return (
          <img
            className={currentImage === index ? 'active' : ''}
            key={id}
            src={`../assets/images/businesspartners/${src}.png`}
            alt={alt}
            width='auto'
            height='25px'
          />
        );
      })}
    </div>
  ) : null;
}
export default BusinessPartners;
