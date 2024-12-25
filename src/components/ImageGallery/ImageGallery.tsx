import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
  };
  user?: { 
    name: string;
  };
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
  className?: string; 
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
          className={styles.image}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;