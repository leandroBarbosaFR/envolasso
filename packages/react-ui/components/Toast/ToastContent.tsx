import React from 'react';
// Styles
import StyledContent from './components/StyledContent';
// Poprs
export interface ToastContentProps {
  variant: string | undefined;
  children: React.ReactNode | React.ReactNode[];
}

const ToastContent = ({ variant, children }: ToastContentProps) => {
  return <StyledContent variant={variant}>{children}</StyledContent>;
};

export default ToastContent;
