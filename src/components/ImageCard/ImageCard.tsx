import React from "react";
import styles from "./ImageCard.module.css";

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

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
  className?: string; 
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick, className }) => {
  const { urls, alt_description } = image;

  return (
    <li className={`${styles.imageItem} ${className || ""}`}>
  <button
    type="button"
    className={styles.imageItem} 
    onClick={() => onClick(image)}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(image);
      }
    }}
  >
    <img className={styles.image} src={urls.small} alt={alt_description} />
  </button>
</li>
  );
};

export default ImageCard;