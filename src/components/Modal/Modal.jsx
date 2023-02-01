import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      console.log(` нажав Esc`);
      this.props.onClose();
    }
  };
  render() {
    const { largeImg, tags } = this.props;
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img src={largeImg} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
