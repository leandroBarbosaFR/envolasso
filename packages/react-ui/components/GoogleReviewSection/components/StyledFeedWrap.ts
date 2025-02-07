import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledFeedWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  overflow: ${({ layoutVariant, theme }) =>
    theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.overflow};
  position: ${({ layoutVariant, theme }) =>
    theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.position};
  &::before {
    height: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.height};
    width: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.width};
    z-index: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.zIndex};
    content: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.content};
    position: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.position};
    top: ${({ layoutVariant, theme }) => theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.left};
    right: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.background};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.Before.borderRadius};
  }
  &::after {
    height: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.height};
    width: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.width};
    height: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.height};
    width: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.width};
    z-index: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.zIndex};
    content: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.content};
    position: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.position};
    top: ${({ layoutVariant, theme }) => theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.left};
    right: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.background};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.padding};
    border: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.After.borderRadius};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.Before.borderRadius};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.width};
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobile.After.borderRadius};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.Before.borderRadius};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.width};
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.mobileLarge.After.borderRadius};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.Before.borderRadius};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.width};
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.tablet.After.borderRadius};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.Before.borderRadius};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.width};
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.desktop.After.borderRadius};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.padding};
    &::before {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.Before.borderRadius};
    }
    &::after {
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.width};
      height: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.height};
      width: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.width};
      z-index: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.zIndex};
      content: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.content};
      position: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.position};
      top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.top};
      bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.bottom};
      left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.left};
      right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.right};
      pointer-events: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.pointerEvents};
      background: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.background};
      padding: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.padding};
      border: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.border};
      border-top: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.borderTop};
      border-bottom: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.borderBottom};
      border-left: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.borderLeft};
      border-right: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.borderRight};
      border-radius: ${({ layoutVariant, theme }) =>
        theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.widescreen.After.borderRadius};
    }
  }
`;

export default StyledFeedWrap;
