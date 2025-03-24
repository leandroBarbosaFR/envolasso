import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledExcerptWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: absolute;
  bottom: 50px;
  left: 0; /* Start from the left border */
  right: 0; /* Optional: to make it extend to the right edge */
  transition: transform 0.3s ease-in-out; /* Smooth animation */
  padding: 0 25px;
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.widescreen.padding};
  }
`;
export default StyledExcerptWrap;
