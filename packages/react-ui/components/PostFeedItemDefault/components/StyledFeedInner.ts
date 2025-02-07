import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledFeedInner = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.pointerEvents};
  position: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.position};
  z-index: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.zIndex};
  top: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.top};
  left: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.left};
  bottom: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.bottom};
  right: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.right};
  background: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.background};
  border: ${({ layoutVariant, theme }) => theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.borderRadius};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobile.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobile.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobile.border};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobile.borderRadius};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobileLarge.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobileLarge.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobileLarge.border};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.tablet.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.tablet.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.tablet.border};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.desktop.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.desktop.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.desktop.border};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.widescreen.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.widescreen.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.widescreen.border};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedItemDefault[layoutVariant!].StyledFeedInner.widescreen.borderRadius};
  }
`;

export default StyledFeedInner;
