import { useEffect, useCallback } from 'react';

const Modal = ({ isOpen, imageURL, onClose }) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <div className={`overlay${isOpen ? ' open' : ''}`} onClick={handleClose}>
      <div className="modal">
        <img src={imageURL} alt={'Large Img'} />
      </div>
    </div>
  );
};

export default Modal;
