import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) =>
    theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.color};
  position: ${({ layoutVariant, theme }) =>
    theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.position};
  overflow: ${({ layoutVariant, theme }) =>
    theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.overflow};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.span.color};

  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
     text-align: center;
     margin: 0 auto;
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.padding};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.borderRadius};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobile.After.borderTop};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.padding};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.borderRadius};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.mobileLarge.After.borderTop};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.padding};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.borderRadius};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.tablet.After.borderTop};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    text-align: center;
     margin: 0 auto;
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.padding};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.borderRadius};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.desktop.After.borderTop};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.padding};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.borderRadius};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.content};
      display: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.display};
      height: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.width};
      margin: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.margin};
      border-top: ${({ layoutVariant, theme }) =>
        theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.widescreen.After.borderTop};
    }
  }
`;

export default StyledHeading;
