import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledArticleBase from '../../Article/components/StyledArticle';

const StyledTextColumn = styled(StyledArticleBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumn.StyledArticle.mobile.gridColumn};
    p {
      margin: 0;
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumn.StyledArticle.mobileLarge.gridColumn};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumn.StyledArticle.tablet.gridColumn};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumn.StyledArticle.desktop.gridColumn};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.SiteFooter[layoutVariant!].StyledTextColumn.StyledArticle.widescreen.gridColumn};
  }
`;

export default StyledTextColumn;
