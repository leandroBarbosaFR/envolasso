import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyledFeedGrid = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.pointerEvents};
  user-select: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.userSelect};
  -webkit-user-select: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.userSelect};
  -khtml-user-select: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.userSelect};
  -moz-user-select: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.userSelect};
  -o-user-select: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.userSelect};

  //////////////// Remove scroll bar ///////////////
  -ms-overflow-style: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.overflowStyle}; /* for Internet Explorer, Edge */
  scrollbar-width: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.scrollbarWidth}; /* for Firefox */
  overflow-y: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.overflowYStyle};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.justifyContent};
  ::-webkit-scrollbar {
    display: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid
        .scrollbarDisplay}; /* for Chrome, Safari, and Opera */
  }
  //////////////// Remving scroll bar ///////////////

  scroll-behavior: ${({ layoutVariant, theme }) =>
    theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.scrollBehaviour};
  display: ${({ layoutVariant, theme }) => theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.display};
  ${({ isHorizontalFeed, layoutVariant, theme }) =>
    isHorizontalFeed
      ? css`
          grid-template-columns: ${theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.gridTemplateColumns};
          grid-auto-flow: ${theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.gridAutoFlow};
          overflow-x: ${theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.overflowX};
          overflow-y: ${theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.overflowY};
          overscroll-behavior-x: ${theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.overscrollBehaviorX};
          scroll-snap-type: ${theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.scrollSnapType};
        `
      : css`
          grid-template-columns: ${theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.gridTemplateColumns};
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    gap: ${({ layoutVariant, theme }) => theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.mobile.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    gap: ${({ layoutVariant, theme }) => theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.mobileLarge.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    gap: ${({ layoutVariant, theme }) => theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.tablet.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.tablet.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ layoutVariant, theme }) => theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.desktop.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    gap: ${({ layoutVariant, theme }) => theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.widescreen.gap};
    margin: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HorizontalFeed[layoutVariant!].StyledFeedGrid.widescreen.padding};
  }
`;

export default StyledFeedGrid;
