import React from 'react';
import PropTypes from 'prop-types';
import css from '../Gallery/Styles.module.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={css.imageGalleryItemImage}
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
