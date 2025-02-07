// components/Modal.tsx
import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import StyledModal from './components/StyledModal'; // Import styled components for the modal
import StyledLogo from './components/StyledLogo'; // Styled component for the logo

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <StyledModal>
      <div>
        <p>test1</p>
      </div>
    </StyledModal>
  );
};

export default Modal;
