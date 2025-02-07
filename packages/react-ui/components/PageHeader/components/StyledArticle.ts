import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledArticleBase from '../../Article/components/StyledArticle';

const StyledArticle = styled(StyledArticleBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.zIndex};
  color: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.color};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.mobile.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.mobile.alignSelf};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.mobileLarge.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.mobileLarge.alignSelf};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.tablet.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.tablet.alignSelf};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.desktop.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.desktop.alignSelf};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledArticle.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.widescreen.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledArticle.widescreen.alignSelf};
  }
`;

export default StyledArticle;
