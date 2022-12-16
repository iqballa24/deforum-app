import React from 'react';

const ModalBackdrop: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 w-full h-[100vh] bg-black opacity-50 z-20"
      onClick={onClose}
    ></div>
  );
};

export default ModalBackdrop;
