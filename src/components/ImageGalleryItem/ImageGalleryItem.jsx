const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className="gallery-item">
      <img
        src={image.webformatURL}
        alt={`By ${image.user}`}
        onClick={() => onImageClick(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
