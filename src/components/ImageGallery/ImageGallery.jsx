import Button from '../Button/Button';
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(12);
  const loadMore = () => {
    setVisibleImages(visibleImages + 12);
  };

  return (
    <div>
      <ul className="gallery">
        {images &&
          images.slice(0, visibleImages).map((image, index) => (
            <li key={index} className="gallery-item">
              <img src={image.webformatURL} alt={`By ${image.user}`} />
            </li>
          ))}
      </ul>
      {images && visibleImages < images.length && <Button onClick={loadMore} />}
    </div>
  );
};

export default ImageGallery;
