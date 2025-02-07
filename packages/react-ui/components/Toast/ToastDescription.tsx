import React from 'react';
// Styles
import StyledToastDescription from './components/StyledToastDescription';
// Poprs
export interface ToastDescriptionProps {
  variant: string | undefined;
  children: React.ReactNode | React.ReactNode[];
}

const ToastDescription = ({ variant, children }: ToastDescriptionProps) => {
  return <StyledToastDescription variant={variant}>{children}</StyledToastDescription>;
};

export default ToastDescription;
