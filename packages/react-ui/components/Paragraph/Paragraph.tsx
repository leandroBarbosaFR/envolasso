import React from 'react';
import StyledParagraph from './components/StyledParagraph';

export interface ParagraphProps {
  children: React.ReactNode | React.ReactNode[];
  variant: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

const Paragraph = ({ children, variant, as }: ParagraphProps) => {
  return (
    <StyledParagraph variant={variant} as={as}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
