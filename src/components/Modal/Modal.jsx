import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ src, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('Keydown', handleKeyDown);
    };
  });
  //

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  //
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={src} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('Keydown', this.handleKeyDown);
//   }
//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   static propTypes = {
//     onClose: PropTypes.func.isRequired,
//   };

//   render() {
//     return createPortal(
//       <div onClick={this.handleBackdropClick} className={css.Overlay}>
//         <div className={css.Modal}>
//           <img src={this.props.src} alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

// export default Modal;
