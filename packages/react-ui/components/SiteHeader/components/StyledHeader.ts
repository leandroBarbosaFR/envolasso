import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyledHeader = styled.header<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].zIndex};
  position: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].position};
  top: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].top};
  width: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].width};
  transition: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].transition};
  -moz-transition: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].transition};
  -webkit-transition: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].transition};

  ${({ isCollapsed, isToggle, layoutVariant, theme }) =>
    isToggle
      ? css`
          background: ${theme.SiteHeader[layoutVariant!].toggledbackground};
          border-radius: ${theme.SiteHeader[layoutVariant!].toggledBorderRadius};
          box-shadow: ${theme.SiteHeader[layoutVariant!].toggledBoxShadow};
          backdrop-filter: ${theme.SiteHeader[layoutVariant!].toggledBackdropFilter};
          -webkit-backdrop-filter: ${theme.SiteHeader[layoutVariant!].toggledWebkitBackdropFilter};
          border: ${theme.SiteHeader[layoutVariant!].toggledBorder};
        `
      : isCollapsed
        ? css`
            background: ${isCollapsed && theme.SiteHeader[layoutVariant!].collapsedbackground};
            border-radius: ${theme.SiteHeader[layoutVariant!].borderRadiusCollapsed};
            box-shadow: ${theme.SiteHeader[layoutVariant!].boxShadowCollapsed};
            backdrop-filter: ${theme.SiteHeader[layoutVariant!].backdropFilterCollapsed};
            -webkit-backdrop-filter: ${theme.SiteHeader[layoutVariant!].webkitBackdropFilterCollapsed};
            border: ${theme.SiteHeader[layoutVariant!].borderCollapsed};
          `
        : css`
            background: ${theme.SiteHeader[layoutVariant!].backgroud};
            border-radius: ${theme.SiteHeader[layoutVariant!].borderRadius};
            box-shadow: ${theme.SiteHeader[layoutVariant!].boxShadow};
            backdrop-filter: ${theme.SiteHeader[layoutVariant!].backdropFilter};
            -webkit-backdrop-filter: ${theme.SiteHeader[layoutVariant!].webkitBackdropFilter};
            border: ${theme.SiteHeader[layoutVariant!].border};
          `};
  //Glassmorphism

  border-radius: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].borderRadius};
  box-shadow: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].boxShadow};
  backdrop-filter: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].backdropFilter};
  -webkit-backdrop-filter: ${({ layoutVariant, theme }) =>
    theme.SiteHeader[layoutVariant!].webkitBackdropFilter};
  border: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].border};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ isCollapsed, layoutVariant, theme }) =>
      isCollapsed
        ? css`
            margin: ${theme.SiteHeader[layoutVariant!].mobile.collapsedMargin};
            padding: ${theme.SiteHeader[layoutVariant!].mobile.collapsedPadding};
          `
        : css`
            margin: ${theme.SiteHeader[layoutVariant!].mobile.margin};
            padding: ${theme.SiteHeader[layoutVariant!].mobile.padding};
          `};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    ${({ isCollapsed, layoutVariant, theme }) =>
      isCollapsed
        ? css`
            margin: ${theme.SiteHeader[layoutVariant!].mobileLarge.collapsedMargin};
            padding: ${theme.SiteHeader[layoutVariant!].mobileLarge.collapsedPadding};
          `
        : css`
            margin: ${theme.SiteHeader[layoutVariant!].mobileLarge.margin};
            padding: ${theme.SiteHeader[layoutVariant!].mobileLarge.padding};
          `};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    ${({ isCollapsed, layoutVariant, theme }) =>
      isCollapsed
        ? css`
            margin: ${theme.SiteHeader[layoutVariant!].tablet.collapsedMargin};
            padding: ${theme.SiteHeader[layoutVariant!].tablet.collapsedPadding};
          `
        : css`
            margin: ${theme.SiteHeader[layoutVariant!].tablet.margin};
            padding: ${theme.SiteHeader[layoutVariant!].tablet.padding};
          `};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    ${({ isCollapsed, layoutVariant, theme }) =>
      isCollapsed
        ? css`
            margin: ${theme.SiteHeader[layoutVariant!].desktop.collapsedMargin};
            padding: ${theme.SiteHeader[layoutVariant!].desktop.collapsedPadding};
          `
        : css`
            margin: ${theme.SiteHeader[layoutVariant!].desktop.margin};
            padding: ${theme.SiteHeader[layoutVariant!].desktop.padding};
          `};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    ${({ isCollapsed, layoutVariant, theme }) =>
      isCollapsed
        ? css`
            margin: ${theme.SiteHeader[layoutVariant!].widescreen.collapsedMargin};
            padding: ${theme.SiteHeader[layoutVariant!].widescreen.collapsedPadding};
          `
        : css`
            margin: ${theme.SiteHeader[layoutVariant!].widescreen.margin};
            padding: ${theme.SiteHeader[layoutVariant!].widescreen.padding};
          `};
  }
`;

export default StyledHeader;
