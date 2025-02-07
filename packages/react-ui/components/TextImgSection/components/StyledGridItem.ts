import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGridItem = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.display};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledGridItem.gridTemplateColumns};
  background: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.background};
  position: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.position};
  overflow: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.overflow};
  border: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.border};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.TextImgSection[layoutVariant!].StyledGridItem.borderRadius};

  ::after {
    content: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.after.content};
    position: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.after.position};
    left: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.after.left};
    bottom: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.after.bottom};
    top: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.after.top};
    right: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.after.right};
    left: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.after.left};
    background: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.after.background};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.after.borderRadius};
    overflow: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.after.overflow};
    height: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.after.height};
    width: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.after.width};
    transform: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.after.transform};
    z-index: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.after.zIndex};
  }
  ::before {
    content: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.before.content};
    position: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.before.position};
    left: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.before.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.before.bottom};
    top: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.before.top};
    right: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.before.right};
    left: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.before.left};
    background: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.before.background};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.before.borderRadius};
    overflow: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.before.overflow};
    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.before.height};
    width: ${({ layoutVariant, theme }) => theme.TextImgSection[layoutVariant!].StyledGridItem.before.width};
    transform: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.before.transform};
    z-index: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.before.zIndex};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.rowGap : '0'};

    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.padding};

    ::after {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.after.zIndex};
    }
    ::before {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.before.zIndex};
    }
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.rowGap : '0'};

    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.padding};

    ::after {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.after.zIndex};
    }
    ::before {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.mobileLarge.before.zIndex};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.rowGap : '0'};

    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.padding};

    ::after {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.after.zIndex};
    }
    ::before {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.tablet.before.zIndex};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.rowGap : '0'};

    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.padding};

    ::after {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.after.zIndex};
    }
    ::before {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.desktop.before.zIndex};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.gridRow};

    height: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.height};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.mobile.gridRow};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.rowGap : '0'};

    margin: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.padding};

    ::after {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.after.zIndex};
    }
    ::before {
      content: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.position};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.left};
      bottom: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.bottom};
      top: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.top};
      right: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.right};
      left: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.left};
      background: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.background};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.borderRadius};
      overflow: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.overflow};
      height: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.width};
      transform: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.transform};
      z-index: ${({ layoutVariant, theme }) =>
        theme.TextImgSection[layoutVariant!].StyledGridItem.widescreen.before.zIndex};
    }
  }
`;
export default StyledGridItem;
