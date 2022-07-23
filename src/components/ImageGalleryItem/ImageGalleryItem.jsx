import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ url, largeImageURL, onClick }) => {
  return (
    <div className={css.ImageGalleryItem}>
      <img
        src={url}
        alt=""
        className={css.ImageGalleryItem_image}
        onClick={() => {
          onClick(largeImageURL);
        }}
      />
    </div>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};