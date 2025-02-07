import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGrid = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.display};
  align-items: ${({ layoutVariant, theme }) =>
    theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.alignItems};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.gridTemplateColumns};
  z-index: ${({ layoutVariant, theme }) => theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.zIndex};

  &::after {
    content: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.content};
    position: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.position};
    left: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.bottom};
    top: ${({ layoutVariant, theme }) => theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.top};
    right: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.right};
    left: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.left};
    background: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.background};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.borderRadius};
    overflow: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.overflow};
    height: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.height};
    width: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.width};
    transform: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.transform};
    z-index: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.after.zIndex};
  }
  &::before {
    content: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.content};
    position: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.position};
    left: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.bottom};
    top: ${({ layoutVariant, theme }) => theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.top};
    right: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.right};
    left: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.left};
    background: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.background};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.borderRadius};
    overflow: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.overflow};
    height: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.height};
    width: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.width};
    transform: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.transform};
    z-index: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.before.zIndex};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.padding};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.after.zIndex};
    }
    &::before {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobile.before.zIndex};
    }
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.padding};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.after.zIndex};
    }
    &::before {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.mobileLarge.before.zIndex};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.padding};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.after.zIndex};
    }
    &::before {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.tablet.before.zIndex};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.padding};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.after.zIndex};
    }
    &::before {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.desktop.before.zIndex};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.padding};

    &::after {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.after.zIndex};
    }
    &::before {
      content: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.widescreen.before.zIndex};
    }
  }
`;

export default StyledGrid;
