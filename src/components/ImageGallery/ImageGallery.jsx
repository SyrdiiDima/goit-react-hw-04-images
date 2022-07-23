import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(img => {
        return (
          <li key={img.id}>
            <ImageGalleryItem
              url={img.webformatURL}
              largeImageURL={img.largeImageURL}
              onClick={onClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};