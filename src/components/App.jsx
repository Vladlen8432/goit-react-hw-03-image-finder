import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import LoaderComponent from './Loader/Loader';
import Modal from './Modal/Modal';
import './styles.css';
import { useState } from 'react';

export const App = () => {
  const [modalImageURL, setModalImageURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleImageClick = imageURL => {
    setModalImageURL(imageURL);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setModalImageURL('');
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      alert('Please, enter');
      return;
    }

    console.log(handleSearch)

    setIsLoading(true);
    const apiKey = '40510236-388f5567c4a0a863bef97b410';

    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        );

        if (!response.ok) {
          throw new Error('HTTP error' + response.status);
        }

        const data = await response.json();
        console.log(data)

        setImages(data.hits);
      } catch (error) {
        console.error('Error data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} setSearchQuery={setSearchQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick}>
          {images.map((image, index) => (
            <ImageGalleryItem
              key={index}
              image={image}
              onImageClick={handleImageClick}
            />
          ))}
        </ImageGallery>
      )}
      {isModalOpen && (
        <div className="modal">
          <img src={modalImageURL} alt="Lagre Img" />
          <button onClick={closeImageModal}>Close</button>
        </div>
      )}
      {isLoading ? (
        <LoaderComponent />
      ) : (
        images.length === 0 && <p>No inages found</p>
      )}
      <Button />
      <Modal />
    </div>
  );
};

//   return (
//     <div>
//       <Searchbar onSearch={handleSearch} setSearchQuery={setSearchQuery} />
//       {images.length > 0 && (
//         <ImageGallery images={images} onImageClick={handleImageClick} />
//       )}
//       {isModalOpen && (
//         <div className="modal">
//           <img src={modalImageURL} alt="Large Img" />
//           <button onClick={closeImageModal}>Close</button>
//         </div>
//       )}
//       {isLoading ? (
//         <LoaderComponent />
//       ) : (
//         images.length === 0 && <p>No images found</p>
//       )}
//       <Button />
//       <Modal />
//     </div>
//   );
// };

// useEffect(() => {
//   const apiKey = '40510236-388f5567c4a0a863bef97b410';

//   const fetchImages = async () => {
//     try {
//       const response = await fetch(
//         `https://pixabay.com/api/?q=cat&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
//       );

//       if (!response.ok) {
//         throw new Error('HTTP error' + response.status);
//       }

//       const data = await response.json();

//       setImages(data.hits);
//     } catch (error) {
//       console.error('Error data:', error);
//     }
//   };

//   fetchImages();
// }, []);

//   return (
//     <div>
//       <Searchbar />
//       {images.map((image, index) => (
//         <ImageGalleryItem
//           key={index}
//           image={image}
//           onImageClick={handleImageClick}
//         />
//       ))}
//       <Button />
//       {isModalOpen && (
//         <div className="modal">
//           <img src={modalImageURL} alt="Large Img" />
//           <button onClick={closeImageModal}>Close</button>
//         </div>
//       )}
//       {isLoading ? (
//         <LoaderComponent />
//       ) : (
//         <ImageGallery images={images} onImageClick={handleImageClick} />
//       )}
//       <Modal />
//     </div>
//   );
// };
