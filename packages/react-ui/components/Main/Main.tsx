import React from 'react';
import StyledMain from './components/StyledMain';

export interface MainProps {
  children: React.ReactNode | React.ReactNode[];
  layoutVariant: string;
}

const Main = ({ children, layoutVariant }: MainProps) => {
  return <StyledMain layoutVariant={layoutVariant}>{children}</StyledMain>;
};

export default Main;
