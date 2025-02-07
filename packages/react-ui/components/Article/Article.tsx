import React from 'react';
import StyledArticle from './components/StyledArticle';

export interface ArticleProps {
  variant: string;
  children: React.ReactNode | React.ReactNode[];
}

const Article = ({ children, variant }: ArticleProps) => {
  return <StyledArticle variant={variant}>{children}</StyledArticle>;
};

export default Article;
