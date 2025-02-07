import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledArticleBase from '../../Article/components/StyledArticle';

const StyledArticle = styled(StyledArticleBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  grid-column: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticle.gridColumn};
  grid-row: ${({ layoutVariant, theme }) => theme.PageNotFoundIndex[layoutVariant!].StyledArticle.gridRow};
  padding: ${({ layoutVariant, theme }) => theme.PageNotFoundIndex[layoutVariant!].StyledArticle.padding};
  padding: ${({ layoutVariant, theme }) => theme.PageNotFoundIndex[layoutVariant!].StyledArticle.padding};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticle.widescreen.padding};
  }
`;

export default StyledArticle;
