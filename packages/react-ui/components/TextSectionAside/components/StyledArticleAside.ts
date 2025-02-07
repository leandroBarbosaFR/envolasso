import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledArticleBase from '../../Article/components/StyledArticle';

const StyledArticleAside = styled(StyledArticleBase)<StyledComponentProps>`
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.mobile.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.mobile.textAlign};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.mobileLarge.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.mobileLarge.textAlign};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.tablet.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.tablet.textAlign};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.desktop.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.desktop.textAlign};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.widescreen.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.TextSectionAside[layoutVariant!].StyledArticleAside.widescreen.textAlign};
  }
`;

export default StyledArticleAside;
