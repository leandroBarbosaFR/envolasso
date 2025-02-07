import React from 'react';
import StyledGrid from './components/StyledGrid';

export interface GridProps {
  children: React.ReactNode | React.ReactNode[];
  withRowGap?: boolean;
  withColGapp?: boolean;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

const Grid = ({ children, withRowGap, withColGapp, as = 'div' }: GridProps) => {
  return (
    <StyledGrid as={as} withRowGap={withRowGap} withColGapp={withColGapp}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
