import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyledFeedItem = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  scroll-snap-align: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.scrollSnapAlign};
  position: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.position};
  color: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.color};
  background: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.background};
  border: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.borderRadius};
  overflow: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.overflow};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            width: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.width};
            max-width: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.maxWidth};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.padding};
          `
        : css`
            grid-column: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.gridColumn};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.mobile.padding};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            max-width: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge
              .maxWidth};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge.padding};
          `
        : css`
            grid-column: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge
              .gridColumn};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.mobileLarge.padding};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            max-width: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.maxWidth};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.padding};
          `
        : css`
            grid-column: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.gridColumn};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.tablet.padding};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            max-width: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.maxWidth};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.padding};
          `
        : css`
            grid-column: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.desktop
              .gridColumn};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.desktop.padding};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isHorizontalFeed, layoutVariant, theme }) =>
      isHorizontalFeed
        ? css`
            max-width: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen.maxWidth};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen.padding};
          `
        : css`
            grid-column: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen
              .gridColumn};
            padding: ${theme.TeamProfileFeedItemDefault[layoutVariant!].StyledFeedItem.widescreen.padding};
          `};
  }
`;

export default StyledFeedItem;
