import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledArticleBase from '../../Article/components/StyledArticle';

const StyledArticleAside = styled(StyledArticleBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) => theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.color};
  display: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.display};
  grid-column: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.gridColumn};
  grid-row: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.gridRow};
  padding: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.padding};
  font-size: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.padding};
  color: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.fontColor};
  text-decoration: ${({ layoutVariant, theme }) =>
    theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.textDecoration};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobile.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobile.padding};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobile.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobile.gap};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobileLarge.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobileLarge.padding};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobileLarge.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.tablet.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.tablet.padding};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.tablet.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.desktop.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.desktop.padding};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.desktop.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    display: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.widescreen.display};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.widescreen.padding};
    justify-content: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.widescreen.justifyContent};
    gap: ${({ layoutVariant, theme }) =>
      theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.widescreen.gap};
  }
`;

export default StyledArticleAside;
