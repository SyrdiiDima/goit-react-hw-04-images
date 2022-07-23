import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('Keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.src} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;