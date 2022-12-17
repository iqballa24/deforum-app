/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom';
import ModalBackdrop from './ModalBackdrop';

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal: React.FC<{
  onClose: () => void;
  contentModal: React.ReactNode;
}> = ({ onClose, contentModal }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onClose={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(contentModal, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
