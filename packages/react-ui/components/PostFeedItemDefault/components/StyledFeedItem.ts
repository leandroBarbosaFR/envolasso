import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyledFeedItem = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  scroll-snap-align: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.scrollSnapAlign};
  position: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.position};
  color: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.color};
  background: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.background};
  border: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.borderRadius};
  overflow: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.overflow};
  > div:nth-child(2) {
    opacity: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.opacity};
    display: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.display};
    transition: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.transition};
  }

  &:hover {
    /* transform: scale(1);
    transition: 0.5s opacity ease-in-out; */

    > div:nth-child(2) {
      opacity: ${({ layoutVariant, theme }) =>
        theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.opacityHover};
      display: ${({ layoutVariant, theme }) =>
        theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.displayHover};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            width: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.width};
            max-width: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.maxWidth};
          `
        : css`
            grid-column: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.gridColumn};
            padding: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.padding};
            min-height: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.minHeight};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            max-width: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge.maxWidth};
          `
        : css`
            grid-column: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge.gridColumn};
            padding: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge.padding};
            min-height
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            max-width: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.maxWidth};
          `
        : css`
            grid-column: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.gridColumn};
            padding: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.padding};
            min-height: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.minHeight};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            max-width: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.maxWidth};
          `
        : css`
            grid-column: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.gridColumn};
            padding: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.padding};
            min-height: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.minHeight};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            max-width: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen.maxWidth};
          `
        : css`
            grid-column: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen.gridColumn};
            padding: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen.padding};
            min-height: ${theme.PostFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen.minHeight};
          `};
  }
`;

export default StyledFeedItem;
