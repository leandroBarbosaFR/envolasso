import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyledFeedItem = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  scroll-snap-align: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.scrollSnapAlign};
  position: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.position};
  color: ${({ layoutVariant, theme }) => theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.color};
  background: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.background};
  border: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.borderRadius};
  overflow: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.overflow};

  > div:nth-child(2) {
    opacity: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.opacity};
    display: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.display};
    transition: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.transition};
  }

  &:hover {
    > a:nth-child(1) {
      transform: scale(1.5);
    }
    > div:nth-child(2) {
      opacity: ${({ layoutVariant, theme }) =>
        theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.opacityHover};
      display: ${({ layoutVariant, theme }) =>
        theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.displayHover};
    }
  }


  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.width};
            max-width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.maxWidth};
          `
        : css`
            grid-column: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.gridColumn};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge.width};
            max-width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge.maxWidth};
          `
        : css`
            grid-column: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge
              .gridColumn};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.width};
            max-width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.maxWidth};
          `
        : css`
            grid-column: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.gridColumn};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.width};
            max-width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.maxWidth};
          `
        : css`
            grid-column: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.gridColumn};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen.width};
            max-width: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen.maxWidth};
          `
        : css`
            grid-column: ${theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen
              .gridColumn};
          `};
  }
`;

export default StyledFeedItem;
