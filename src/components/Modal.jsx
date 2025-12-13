import { Component } from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

class Modal extends Component {
  render() {
    const { largeImageURL, tags, onClose } = this.props;

    return (
        <ModalBackdrop onClick={onClose}>
        <div
          className="modal-content"
          onClick={e => e.stopPropagation()}
        >
          <img src={largeImageURL} alt={tags} />
        </div>
        </ModalBackdrop>
    );
  }
}

export default Modal;
