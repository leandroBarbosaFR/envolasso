import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledList = styled.ul<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  overflow-y: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.overflowY};
  overflow-x: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.overflowX};
  padding: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.padding};
  & * {
    scrollbar-width: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.scrollbarWidth};
    scrollbar-color: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.scrollbarColor};
  }
  /* Works on Chrome/Edge/Safari */
  &::-webkit-scrollbar,
  &::-webkit-scrollbar:vertical,
  &::-webkit-scrollbar:horizontal {
    width: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.webkitScrollbarWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.webkitScrollbarHeight};
  }
  &::-webkit-scrollbar-track {
    width: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.webkitScrollbarTrackWidth};
    height: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.webkitScrollbarTrackHeight};
    background-color: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.scrollbarTrackBgColor};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.webkitScrollbarTrackBorderRadius};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.webkitScrollbarThumbBgColor};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.webkitScrollbarThumbBorderRadius};
    border: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.webkitScrollbarThumbBorder};
  }
  // Custom Scroll Hover
  // ================
  &:hover {
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.hover.pointerEvents};
    & * {
      scrollbar-color: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledList.hover.scrollbarColor};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ layoutVariant, theme }) =>
        theme.NavList[layoutVariant!].StyledNav.StyledList.hover.webkitScrollbarThumbBgColor};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    width: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.mobile.width};
    height: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.mobile.height};
    overflow: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.mobile.overflow};
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.mobile.padding};
    margin: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    width: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.mobileLarge.width};
    height: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.mobileLarge.height};
    overflow: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.mobileLarge.overflow};
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.mobileLarge.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    width: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.tablet.width};
    height: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.tablet.height};
    overflow: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.tablet.overflow};
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.tablet.padding};
    margin: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    width: ${({ layoutVariant, theme }) => theme.NavList[layoutVariant!].StyledNav.StyledList.desktop.width};
    height: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.desktop.height};
    overflow: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.desktop.overflow};
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.desktop.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    width: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.widescreen.width};
    height: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.widescreen.height};
    overflow: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.widescreen.overflow};
    padding: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.widescreen.padding};
    margin: ${({ layoutVariant, theme }) =>
      theme.NavList[layoutVariant!].StyledNav.StyledList.widescreen.margin};
  }
`;

export default StyledList;
