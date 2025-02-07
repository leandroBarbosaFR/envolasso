import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledArticleBase from '../../Article/components/StyledArticle';

const StyledArticle = styled(StyledArticleBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) => theme.TextSection[layoutVariant!].StyledArticle.color};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.TextSection[layoutVariant!].StyledArticle.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.TextSection[layoutVariant!].StyledArticle.mobile.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.mobile.textAlign};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.mobileLarge.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.mobileLarge.textAlign};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.TextSection[layoutVariant!].StyledArticle.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.TextSection[layoutVariant!].StyledArticle.tablet.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.tablet.textAlign};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.TextSection[layoutVariant!].StyledArticle.desktop.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.desktop.textAlign};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.widescreen.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSection[layoutVariant!].StyledArticle.widescreen.textAlign};
  }
`;

export default StyledArticle;
