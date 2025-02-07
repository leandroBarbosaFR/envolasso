import React from 'react';
// Styles
import StyledButton from './components/StyledButton';
// Poprs
export interface ToastButtonProps {
  variant: string | undefined;
  children: React.ReactNode | React.ReactNode[];
}

const ToastButton = ({ variant, children }: ToastButtonProps) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default ToastButton;
