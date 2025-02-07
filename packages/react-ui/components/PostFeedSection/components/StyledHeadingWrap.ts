import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledHeadingWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.zIndex};
    top: ${({ layoutVariant, theme }) => theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.padding};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.widescreen.borderRadius};
  }
`;
export default StyledHeadingWrap;
