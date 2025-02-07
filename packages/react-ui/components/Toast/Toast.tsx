import React from 'react';
// Styles
import StyledRoot from './components/StyledRoot';
// Poprs
export interface ToastProps {
  variant: string | undefined;
  children: React.ReactNode | React.ReactNode[];
}

const Toast = ({ variant, children, ...rest }: ToastProps) => {
  return (
    <StyledRoot variant={variant} {...rest}>
      {children}
    </StyledRoot>
  );
};

export default Toast;
