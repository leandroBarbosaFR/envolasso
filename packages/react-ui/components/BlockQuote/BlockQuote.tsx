import React from 'react';
import StyledBlockQuote from './components/StyledBlockQuote';

export type BlockQuoteVariant = 'quote' | 'quopteCredit';

export interface BlockQuoteProps {
  children: React.ReactNode | React.ReactNode[];
  variant: BlockQuoteVariant;
}

const BlockQuote = ({ children, variant }: BlockQuoteProps) => {
  return <StyledBlockQuote variant={variant}>{children}</StyledBlockQuote>;
};

export default BlockQuote;
