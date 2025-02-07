import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledBottomWrapper = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.display};
  z-index: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.zIndex};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.justifyContent};
  align-self: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.alignSelf};
  position: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.position};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.pointerEvents};
  flex-direction: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.flexDirection};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobile.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobile.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobile.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobile.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobile.right};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobileLarge.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobileLarge.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobileLarge.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.mobileLarge.right};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.tablet.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.tablet.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.tablet.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.tablet.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.tablet.right};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.desktop.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.desktop.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.desktop.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.desktop.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.desktop.right};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.widescreen.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.widescreen.top};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.widescreen.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.widescreen.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledBottomWrapper.widescreen.right};
  }
`;

export default StyledBottomWrapper;
