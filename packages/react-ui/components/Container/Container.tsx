import React from 'react';
import StyledContainer from './components/StyledContainer';

export interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
  isFluid: boolean;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

const Container = ({ children, isFluid, as = 'div' }: ContainerProps) => {
  return (
    <StyledContainer as={as} isFluid={isFluid}>
      {children}
    </StyledContainer>
  );
};

export default Container;
