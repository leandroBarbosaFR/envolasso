import React from 'react';
import StyledSection from './components/StyledSection';

export interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

const Section = ({ children, as }: SectionProps) => {
  return <StyledSection as={as}>{children}</StyledSection>;
};

export default Section;
