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
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const { urls, alt_description } = image;

  return (
    <li className={styles.imageItem} onClick={() => onClick(image)}>
      <img className={styles.image} src={urls.small} alt={alt_description} />
    </li>
  );
};

export default ImageCard;