import { StyledComponentProps } from '@agency-platform/shared-types';
import styled, { css } from 'styled-components';

const StyleNavWap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // Custom Scroll
  // ==========================================================================
  overflow-y: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.overflowY};
  overflow-x: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.overflowX};
  & * {
    scrollbar-width: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyleNavWap.scrollbarWidth};
  }
  /* Works on Chrome/Edge/Safari */
  &::-webkit-scrollbar,
  &::-webkit-scrollbar:vertical,
  &::-webkit-scrollbar:horizontal {
    width: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.webkitScrollbarWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyleNavWap.webkitScrollbarHeight};
  }
  &::-webkit-scrollbar-track {
    width: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyleNavWap.webkitScrollbarTrackWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyleNavWap.webkitScrollbarTrackHeight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyleNavWap.webkitScrollbarTrackBorderRadius};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyleNavWap.webkitScrollbarThumbBorderRadius};
    border: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyleNavWap.webkitScrollbarThumbBorder};
  }
  // Custom Scroll Hover
  // ================
  &:hover {
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyleNavWap.hover.pointerEvents};
  }

  ${({ isCollapsed, layoutVariant, theme }) =>
    isCollapsed
      ? css`
          & * {
            scrollbar-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap.collapsedScrollbarColor};
          }
          &::-webkit-scrollbar-track {
            background-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap.collapsedScrollbarTrackBgColor};
          }
          &::-webkit-scrollbar-thumb {
            background-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap
              .collapsedWebkitScrollbarThumbBgColor};
          }
          &:hover {
            & * {
              scrollbar-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap.hover.collapsedScrollbarColor};
            }
            &::-webkit-scrollbar-thumb {
              background-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap.hover
                .collapsedWebkitScrollbarThumbBgColor};
            }
          }
        `
      : css`
          & * {
            scrollbar-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap.scrollbarColor};
          }
          &::-webkit-scrollbar-track {
            background-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap.scrollbarTrackBgColor};
          }
          &::-webkit-scrollbar-thumb {
            background-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap.webkitScrollbarThumbBgColor};
          }
          &:hover {
            & * {
              scrollbar-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap.hover.scrollbarColor};
            }
            &::-webkit-scrollbar-thumb {
              background-color: ${theme.SiteHeader[layoutVariant!].StyleNavWap.hover
                .webkitScrollbarThumbBgColor};
            }
          }
        `};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.mobile.padding};
    margin: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    padding: ${({ layoutVariant, theme }) =>
      theme.SiteHeader[layoutVariant!].StyleNavWap.mobileLarge.padding};
    margin: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.tablet.padding};
    margin: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.desktop.padding};
    margin: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    padding: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.widescreen.padding};
    margin: ${({ layoutVariant, theme }) => theme.SiteHeader[layoutVariant!].StyleNavWap.widescreen.margin};
  }
`;

export default StyleNavWap;
