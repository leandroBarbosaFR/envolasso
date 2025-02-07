import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledArticleWrapWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  display: ${({ layoutVariant, theme }) => theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.display};
  grid-column: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.gridColumn};
  grid-row: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.gridRow};
  padding: ${({ layoutVariant, theme }) => theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.padding};
  padding: ${({ layoutVariant, theme }) => theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.padding};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobile.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobileLarge.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.tablet.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.tablet.padding};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.tablet.justifyContent};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.desktop.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.widescreen.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleWrap.widescreen.padding};
  }
`;

export default StyledArticleWrapWrap;
