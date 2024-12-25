import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
}

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  const { urls, alt_description, user } = image;

  return (
    <Modal isOpen onRequestClose={onClose} className={styles.overlay}>
      <div className={styles.modal}>
        <img src={urls.regular} alt={alt_description} />
        <p>Author: {user.name}</p>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;