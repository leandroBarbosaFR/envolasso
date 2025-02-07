import styled from 'styled-components';
import { StyledComponentProps } from '@agency-platform/shared-types';

const StyledPortfolioFeedItem = styled('div')<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledPortfolioFeedItem.mobile.gridColumn};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledPortfolioFeedItem.mobileLarge.gridColumn};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledPortfolioFeedItem.tablet.gridColumn};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledPortfolioFeedItem.desktop.gridColumn};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioIndex[layoutVariant!].StyledPortfolioFeedItem.widescreen.gridColumn};
  }
`;

export default StyledPortfolioFeedItem;
