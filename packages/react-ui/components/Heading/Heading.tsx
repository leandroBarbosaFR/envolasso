import React from 'react';
import StyledHeading from './components/StyledHeading';

export type HeadingVariant = 'primary' | 'secondary' | 'tertiary' | 'subTitle';

export interface HeadingProps {
  children?: React.ReactNode | React.ReactNode[];
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  variant: HeadingVariant;
}

const Heading = ({ children, as, variant }: HeadingProps) => {
  return (
    <StyledHeading as={as} variant={variant}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
