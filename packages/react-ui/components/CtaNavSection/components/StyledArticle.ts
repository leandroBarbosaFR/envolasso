import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import Article from '../../Article/components/StyledArticle';

const StyledArticle = styled(Article)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledArticle.color};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledArticle.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledArticle.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledArticle.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledArticle.widescreen.padding};
  }
`;

export default StyledArticle;
