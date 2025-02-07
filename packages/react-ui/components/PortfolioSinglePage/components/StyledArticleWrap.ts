import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledArticleWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.widescreen.padding};
  }
`;
export default StyledArticleWrap;
