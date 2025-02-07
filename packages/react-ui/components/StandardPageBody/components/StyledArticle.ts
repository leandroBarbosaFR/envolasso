import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import Article from '../../Article/components/StyledArticle';

const StyledArticle = styled(Article)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.color};
  blockquote {
    color: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.blockquote.color};
  }

  p {
    border-top: 1px solid #8f8f8f; /* Ajoute une bordure supérieure à tous les paragraphes */
    border-bottom: 1px solid #8f8f8f; /* Ajoute une bordure inférieure à tous les paragraphes */
    margin: 0; /* Supprime les marges */
    padding: 30px 0; /* Ajoute un espacement interne */
  }

  p:first-child {
    border-top: 1px solid #8f8f8f; /* Bordure supérieure pour le premier élément */
  }

  p + p {
    border-top: none; /* Supprime la bordure supérieure entre les paragraphes consécutifs */
  }

  h3 {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.widescreen.margin};
  }
`;

export default StyledArticle;
