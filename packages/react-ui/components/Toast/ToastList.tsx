import React from 'react';
// Styles
import StyledToastList from './components/StyledToastList';
// Poprs
export interface ToastListProps {
  layoutVariant: string;
  children: React.ReactNode | React.ReactNode[];
}

const ToastList = ({ layoutVariant, children }: ToastListProps) => {
  return <StyledToastList layoutVariant={layoutVariant}>{children}</StyledToastList>;
};

export default ToastList;
